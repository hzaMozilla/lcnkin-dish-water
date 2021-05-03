import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { admin } from '@src/api/admin';
//import { setUserName } from 'src/libs/navbart/login/store/action'
// import { IUserName } from 'src/package/store/storeType';
import './index.less';

interface LogInProps {
  setUserName: Function,
  history: any,
  location: any,
  match: any
}

interface LogInState {
  formData: {
    userName: string,
    passWord: string,
    type: string
  },
  errorText: string
}
interface setFormData {
  userName?: string,
  passWord?: string,
  type?: string
}

export const LogIn = function (props: LogInProps) {
  // const [formData, setstate] = useState({
  //   userName: '',
  //   passWord: '',
  //   type: ''
  // });
  // const { setUserName } = props;
  // const updateField = (e: any) => {
  //   setstate({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };
  // const submitHandler = () => {
  //   let data = Object.assign({}, formData)
  //   admin(data).then((res: any) => {
  //     console.log(res);
  //     if (res.success) {
  //       setUserName(data.userName)
  //     } else {
  //       if (res.message) {
  //         // setstate({
  //         //   ...formData,
  //         //   errorText : res.message
  //         // })
  //       }
  //     }
  //   })
  // }
  return (
    <div className="login">
      <div className="login-form-content">
        <div className="login-btn">
          <button className="wechart-login-btn-color public-login-btn-style">
            微信一键登陆
            </button>
          <button className="phone-login-btn-color public-login-btn-style">
            手机验证码登陆
            </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => {
  return {
    setUserName: (userName: IUserName) => (
      dispatch(setUserName(userName))
    ),
    ...ownProps
  }
}

export default withRouter(connect(() => ({}), mapDispatchToProps)(LogIn))