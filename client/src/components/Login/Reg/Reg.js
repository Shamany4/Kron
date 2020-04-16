import React from "react";
import "../login.sass"
import {Link} from "react-router-dom";
import axios from "axios";
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

const Reg = (props) => {

  // Валидация формы
  const { register, handleSubmit, errors } = useForm(); // инициализация хуков
  const onSubmit = data => {
    let number = data.phone;
    number.split(/\W/);
    let phone = number[0] + number[3] + number[4] + number[5] + number[8] + number[9]
      + number[10] + number[12] + number[13] + number[14] + number[15];
    registerHandler(data, phone)
  };

  // Отправка на сервер
  const registerHandler = (data, phone) => {
    axios({
      url: `http://localhost:5000/api/auth/register`,
      method: 'POST',
      data: {
        email: data.email,
        password: data.password,
        phone: phone,
        username: data.username
      }
    })
      .then((res) => {
        if (res.status === 202) {
          alert(res.data.message);
        }
        localStorage.setItem('user_token', res.data.token);
        if (localStorage.getItem('user_token') !== '') {
          props.auth();
        }
        
      })
      .catch(error => console.log(error))
  };


  return(
    <div className="login">
      <div className="login-wrap">
        <div className="login-form">
          <div className="login-form-header">
            <Link to="/" className="login-form-header__title" onClick={props.click}>KrÖn</Link>
            <span className="login-form-header__desc">Регистрация</span>
          </div>
          <div className="login-form-input">
            <form onSubmit={handleSubmit(onSubmit)}>
              { errors.email && <p className="error_msg">Неккоректный email</p> }
              <div className="login-form-input-block">
                <input
                  type="email"
                  name="email"
                  className="login-form-input__item"
                  placeholder="Ваш email"
                  ref={register({
                    required: true,
                    pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                  })}
                />
                <span className="login-form-input__span"><i className="fas fa-envelope"></i></span>
              </div>
              { errors.password && <p className="error_msg">Неккоректный пароль</p> }
              <div className="login-form-input-block">
                <input
                  type="password"
                  name="password"
                  className="login-form-input__item"
                  placeholder="Ваш пароль"
                  ref={register({
                    required: true,
                    max: 20,
                    min: 8,
                    maxLength: 20,
                    minLength: 8})}
                />
                <span className="login-form-input__span"><i className="fas fa-lock"></i></span>
              </div>
              { errors.phone && <p className="error_msg">Неккоректный телефон</p> }
              <div className="login-form-input-block">
                <InputMask
                  mask="8 (999) 999 9999"
                  type="text"
                  name="phone"
                  className="login-form-input__item"
                  inputRef={register({
                    required: true,
                    pattern: /^8+\s+(\(\d\d\d\))+\s+(\d\d\d)+\s+(\d\d\d\d)/
                  })}
                  placeholder="Ваш телефон"
                />
                <span className="login-form-input__span"><i className="fas fa-phone"></i></span>
              </div>
              { errors.username && <p className="error_msg">Неккоректное имя</p> }
              <div className="login-form-input-block">
                <input
                  type="text"
                  name="username"
                  className="login-form-input__item"
                  placeholder="Ваше имя"
                  ref={register({
                    required: true,
                    min: 3,
                    max: 15,
                    minLength: 3,
                    maxLength: 15,
                    pattern: /^[а-яА-ЯёЁ]+$/
                  })}
                />
                <span className="login-form-input__span"><i className="fas fa-user"></i></span>
              </div>
              <input
                type="submit"
                className="login-form-input__btn"
              />
            </form>
          </div>
          <div className="login-form-new">
            <Link to="/auth" className="login-form-new__btn">Есть аккаунт? Войдите</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
