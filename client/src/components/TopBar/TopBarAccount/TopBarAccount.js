import React from "react";
import {Link} from "react-router-dom";

const TopBarAccount = (props) => {
  return(
      <div className="account">
        <div className="account-message">Сообщения</div>
        {
          props.auth
            ?
            <Link to="/user" className="account-auth">Личный кабинет</Link>
            :
            <Link to="/auth" className="account-auth" onClick={props.click}>Личный кабинет</Link>
        }
      </div>
  );
};

export default TopBarAccount;
