import React, {useState} from "react";
import "../login.sass"
import {Link} from "react-router-dom";
import {useHttp} from "../../../hooks/http.hook";

const Auth = (props) => {

  const {loading, request} = useHttp();

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
  }

  const authHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      console.log(data);
    } catch (e) {}
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
              onClick={authHandler}
              disabled={loading}
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