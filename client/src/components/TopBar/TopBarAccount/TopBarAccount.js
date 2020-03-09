import React from "react";

const TopBarAccount = props => {
  return(
      <div className="account">
        <div className="account-message">Сообщения</div>
        <div className="account-auth" onClick={props.status}>Личный кабинет</div>
      </div>
  );
};

export default TopBarAccount;
