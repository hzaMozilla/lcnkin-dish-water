import * as React from "react";
import { Dispatch } from "redux";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { admin } from "src/api/admin";
import { List, WhiteSpace, InputItem, Button } from 'antd-mobile';
import {
  setUserName,
} from "@src/libs/navbart/login/store/action";
import { validateWithMessage } from "src/libs/mixins/msgBox";
import { IUserName } from "src/package/store/storeType";

import "./index.less";

interface LoginProps {
  userName: any,
  passWord: any,
  setUserName: Function,
  setPassWord: Function,
  handelLogin: Function
};
interface LogInState extends LoginProps {
  formData: {
    userName: string,
    passWord: string,
    type: string
  },
  errorText: string
};
let timeChange: any;
const BasicInputExample: React.FC<LogInState> = (props) => {
  const [formData, setstate] = useState({
    userName: '',
    passWord: '',
    type: '登陆'
  });
  const [errorText, setErrorText] = useState('');
  const [time, setTime] = useState(60);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnContent, setBtnContent] = useState('获取验证码');
  useEffect(() => {
    if (time > 0 && time < 60) {
      setBtnContent(`${time}s后重发`);
    } else {
      clearInterval(timeChange);
      setBtnDisabled(false);
      setTime(60);
      setBtnContent('获取验证码');
    }
  }, [time]);
  useEffect(() => {
    clearInterval(timeChange);
  }, []);
  const getPhoneCaptcha = () => {
    timeChange = setInterval(() => setTime(t => --t), 1000);
    setBtnDisabled(true);
  }
  const LoginSubmit = () => {
    let data = formData
    validateWithMessage(data)
    props.setUserName(data.userName)
    admin(data).then((res: any) => {
      if (res.success) {
        setUserName(data.userName)
      } else {
        if (res.message) {
          setErrorText(res.message)
        }
      }
    })
  }
  return (
    <div className="phonelogin-form-content">
      <div className="phonelogin-form-img">
        <img src="src/icon/plogo.png" />
      </div>
      <div className="phonelogin-new-user">还差一步，登陆领「 新人专享卷包 」</div>
      <List className="phonelogin-form-ltem">
        <InputItem
          placeholder="请输入手机号"
          value={formData.userName}
          onChange={
            (val) => setstate({ ...formData, userName: val })
          }
        ></InputItem>
        <WhiteSpace></WhiteSpace>
        <div className="phonelogin-code-ipn">
          <InputItem
            placeholder="请输入验证码"
            value={formData.passWord}
            onChange={
              (val) => setstate({ ...formData, passWord: val })
            }
          ></InputItem>
          <Button
            className="phonelogin-code-btn"
            onClick={getPhoneCaptcha}
            disabled={btnDisabled}
          >{btnContent}</Button>
        </div>

      </List>
      <Button className="phonelogin-item-btn" onClick={LoginSubmit}>确定</Button>
    </div>
  );

}
const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  return {
    setUserName: (userName: IUserName) => {
      console.log(dispatch(setUserName(userName)));
      dispatch(setUserName(userName))
    },
    ...ownProps
  }
}
const BasicInput = withRouter(connect(() => ({}), mapDispatchToProps)(BasicInputExample));
export default BasicInput;