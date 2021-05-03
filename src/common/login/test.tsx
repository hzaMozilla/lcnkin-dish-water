import * as React from "react";
import "./index.less";
export const LogIn = function () {

  function updateField() {
    console.log(history.pushState);
  };
  return (
    <div className="login">
      <div className="login-form-content">
        <div className="login-form-content-img">
          <img src="../src/icon/login.jpeg" />
        </div>
        <div className="login-btn">
          <button className="wechart-login-btn-color public-login-btn-style">
            微信一键登陆
          </button>
          <button className="phone-login-btn-color public-login-btn-style" onClick={() => { updateField }}>
            手机验证码登陆
          </button>
        </div>
      </div>
    </div>
  )
}