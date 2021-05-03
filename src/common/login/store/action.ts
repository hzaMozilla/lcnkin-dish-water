
import { IUserName, IActionCreator } from "src/package/store/storeType"
import { getDutiesPage } from "src/api/get";
interface actionTypes {
  SET_USER: string,
  SET_PASSWORD: string,
  CHG_USERNAME: string,
  CHG_PASSWORD: string,
  SET_PLAYING_STATE: string,
  SET_USERNAME: string,
  SET_SEARCH_HISTORY: string
}

const actionTypes: actionTypes = {
  SET_USER: "SET_USER",
  SET_PASSWORD: "SET_PASSWORD",
  CHG_PASSWORD: "CHG_PASSWORD",
  CHG_USERNAME: "CHG_USERNAME",
  SET_PLAYING_STATE: "SET_PLAYING_STATE",
  SET_USERNAME: "SET_USERNAME",
  SET_SEARCH_HISTORY: "SET_SEARCH_HISTORY"
}

const hadelLogin = () => {
  setTimeout(() => {
    getDutiesPage({
      query: {
        uername: "xx",
        password: "xx"
      }
    }
    )
  }, 1000)
}

const setPassWord = (text: string) => {
  return {
    type: actionTypes.CHG_PASSWORD,
    text,
  }
}

export const setUserName: IActionCreator = (userName: IUserName) => {
  return {
    type: actionTypes.SET_USER,
    userName
  }
}

export const hadelApi = {
  hadelLogin,
  setPassWord,
  setUserName
}
export default actionTypes;