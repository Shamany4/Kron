import React, {useState} from "react";
import "../login.sass"
import {Link} from "react-router-dom";
import axios from "axios";

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
    axios({
      url: `http://localhost:5000/api/auth/register`,
      method: 'POST',
      data: {
        ...form
      }
    })
      .catch(error => console.log(error))
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
                className="login-form-input__item"
                placeholder="Ваш email"
                onChange={changeHandler}
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
              <input
                type="text"
                name="phone"
                className="login-form-input__item"
                placeholder="Ваш телефон"
                onChange={changeHandler}
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
              // disabled={loading}
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