import React from "react";
import "./Login.sass";
import BackDrop from "./BackDrop/BackDrop";

const Login = (props) => {

  return (

    <div className="login">
      <BackDrop click={props.click}/>
      <div className="login-block">
        <a href="#" className="login-block_close" onClick={props.click}>&times;</a>
        <div className="login-headers">
          <h3 className="login-headers__logo">KrÖn</h3>
          <p className="login-headers__title">Авторизация</p>
        </div>
        <div className="login-form">
          <form action="#" className="form">
            <input className="form__input" type="email" placeholder="Ваш email"/>
            <input className="form__input" type="password"placeholder="Ваш пароль" />
            <a href="" className="form__btn">Войти</a>
          </form>
        </div>
        <div className="login-new">
          <a href="#" className="login-new__btn">Нет аккаунта? Создайте</a>
        </div>
      </div>
    </div>
  );
};

export default Login;