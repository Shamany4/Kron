import React, {useState} from "react";
import "../login.sass"
import {Link} from "react-router-dom";

const Auth = (props) => {



  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
  }

  return(
    <div className="login">
      <div className="login-wrap">
        
        <div className="login-form">
          <div className="login-form-header">
            <Link to="/" className="login-form-header__title" onClick={props.click}>KrÖn</Link>
            <span className="login-form-header__desc">Авторизация</span>
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
            <button
              className="login-form-input__btn"
            >
              Войти
            </button>
          </div>
          <div className="login-form-new">
            <Link to="/register" className="login-form-new__btn">Нет аккаунта? Создайте</Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Auth;