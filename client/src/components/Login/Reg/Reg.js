import React from "react";
import "../login.sass"

const Reg = () => {
  return(
    <div className="login">
      <div className="login-wrap">

        <div className="login-form">
          <div className="login-form-header">
            <h2 className="login-form-header__title">KrÖn</h2>
            <span className="login-form-header__desc">Регистрация</span>
          </div>
          <div className="login-form-input">
            <div className="login-form-input-block">
              <input type="email" className="login-form-input__item" placeholder="Ваш email"/>
              <span className="login-form-input__span"><i className="fas fa-envelope"></i></span>
            </div>
            <div className="login-form-input-block">
              <input type="password" className="login-form-input__item" placeholder="Ваш пароль"/>
              <span className="login-form-input__span"><i className="fas fa-lock"></i></span>
            </div>
            <div className="login-form-input-block">
              <input type="text" className="login-form-input__item" placeholder="Ваш телефон"/>
              <span className="login-form-input__span"><i className="fas fa-phone"></i></span>
            </div>
            <div className="login-form-input-block">
              <input type="text" className="login-form-input__item" placeholder="Ваше имя"/>
              <span className="login-form-input__span"><i className="fas fa-user"></i></span>
            </div>
            <button className="login-form-input__btn">Регистрация</button>
          </div>
          <div className="login-form-new">
            <a href="#" className="login-form-new__btn">Есть аккаунт? Войдите</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reg;