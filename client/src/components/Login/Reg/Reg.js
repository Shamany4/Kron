import React, {useState} from "react";
import "../login.sass"
import {Link} from "react-router-dom";
import axios from "axios";
import InputMask from 'react-input-mask';

const Reg = (props) => {

  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: '',
    username: ''
  });

  const changeHandler = event => {
    setForm({...form, [event.target.name]:event.target.value })
  }

  const registerHandler = () => {
    let number = form.phone;
    number.split(/\W/);
    let phone = number[1] + number[4] + number[5] + number[6] + number[9]
      + number[10] + number[11] + number[13] + number[14] + number[15] + number[16];
    axios({
      url: `http://localhost:5000/api/auth/register`,
      method: 'POST',
      data: {
        email: form.email,
        password: form.password,
        phone: phone,
        username: form.username
      }
    })
      .catch(error => console.log(error))
  }

  let classInput = 'login-form-input__item';

  const validationEmail = (event) => {
    if (event.target.value !== ' ') {
      let regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      regex.test(event.target.value);
      if (regex.test(event.target.value)) {
        classInput += ' login-form-input__item_success';
        console.log(event.target.value);
        alert('Успех!');
      }
    }
  }

  return(

    <div className="login">
      <div className="login-wrap">

        <div className="login-form">
          <div className="login-form-header">
            <Link to="/" className="login-form-header__title" onClick={props.click}>KrÖn</Link>
            <span className="login-form-header__desc">Регистрация</span>
          </div>






          <div className="login-form-input">

            <div className="login-form-input-block">
                <input
                  type="email"
                  name="email"
                  className={classInput}
                  placeholder="Ваш email"
                  // onBlur={validationEmail}
                  onChange={validationEmail}
                  // onChange={changeHandler}
                />
                <span className="login-form-input__span"><i className="fas fa-envelope"></i></span>
              </div>

            <div className="login-form-input-block">
                <input
                  type="password"
                  name="password"
                  className="login-form-input__item"
                  placeholder="Ваш пароль"
                  onChange={changeHandler}
                />
                <span className="login-form-input__span"><i className="fas fa-lock"></i></span>
              </div>
            <div className="login-form-input-block">
                <InputMask
                  mask="+7 (999) 999 9999"
                  type="text"
                  name="phone"
                  // maskChar=" "
                  onChange={changeHandler}
                  className="login-form-input__item"
                  placeholder="Ваш телефон"
                />
                <span className="login-form-input__span"><i className="fas fa-phone"></i></span>
              </div>
            <div className="login-form-input-block">
                <input
                  type="text"
                  name="username"
                  className="login-form-input__item"
                  placeholder="Ваше имя"
                  onChange={changeHandler}
                />
                <span className="login-form-input__span"><i className="fas fa-user"></i></span>
              </div>

            <button
              className="login-form-input__btn"
              onClick={registerHandler}
            >
              Регистрация
            </button>

          </div>






          <div className="login-form-new">
            <Link to="/auth" className="login-form-new__btn">Есть аккаунт? Войдите</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reg;