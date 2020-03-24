import React from "react";
import {Link} from "react-router-dom";

const TopBarAccount = (props) => {
  return(
      <div className="account">
        <div className="account-message">Сообщения</div>
        {/*<div className="account-auth">Личный кабинет</div>*/}
        <Link to="/auth" className="account-auth" onClick={props.click}>Личный кабинет</Link>
      </div>
  );
};

export default TopBarAccount;
