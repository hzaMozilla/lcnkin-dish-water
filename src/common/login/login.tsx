import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { hadelApi } from "./store/action"
interface LoginProps {
  username: any,
  password: any,
  setUserName: () => void,
  setPassWord: () => void,
  handelLogin: () => void
}

export const Login: React.FC<LoginProps> = (props) => {
  const {
    username,
    password,
    setUserName,
    setPassWord,
    handelLogin
  } = props
  return (
    <div>
      <div>
        <input
          placeholder="用户名"
          value={username}
          onChange={setUserName}
        />
      </div>
      <div>
        <input
          placeholder="用户名"
          value={password}
          onChange={setPassWord}
        /></div>
      <div><button onClick={handelLogin}>提交</button></div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    username: state.getIn(["user", "username"]),
    password: state.getIn(["user", "password"])
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserName: (val: string) => {
      dispatch(hadelApi.setUserName(val))
    },
    setPassWord: (val: string) => {
      dispatch(hadelApi.setPassWord(val))
    },
    handelLogin: () => { dispatch(hadelApi.hadelLogin) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);