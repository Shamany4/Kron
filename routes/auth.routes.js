const {Router} = require('express');
const config = require('config');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/user');
const router = Router();

// /api/auth/register
router.post(
    '/register',
    // Валидация данных
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символом').isLength({min: 6}),
    ],
    // Отправляем на сервер данные
    async (req, res) => {
    try {
        // console.log(req.body)
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные даннные при регистрации'
            });
        }

        const {email, password, phone, username} = req.body;

        const candidate = await User.findOne({ email: email });

        const candidate_phone = await User.findOne({phone: phone})

        if (candidate_phone) {
            return res.status(202).json({message: 'Такой номер уже есть'})
        }

        if (candidate) {
           return res.status(202).json({message: 'Такой пользователь уже существует'});
        }

        const hashPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashPassword, phone, username});

        await user.save();
    
        const token = jsonwebtoken.sign(
          {userId: user.id},
          config.get('jwtSecret'),
          {expiresIn: '1h'}
        );
    
        if (token) {
            return res.status(200).json({ token, userId: user.id});
        }

        res.status(201).json({message: 'Пользователь создан'});
    }
    catch (e) {
        // res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'});
        console.log(e)
    }
});

// /api/auth/login
router.post('/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные даннные при входе'
                });
            }

            const {email, password} = req.body;
            const user = await user.findOne({email});

            if (!user) {
                return res.status(400).json({message: 'Пользователь не найден'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
            }

            const token = jsonwebtoken.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            );

            return res.status(200).json({ token, userId: user.id});



        }
        catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'});
        }
});

module.exports = router;
