import { USER_INFO, PAGE_INDEX } from "./action-type"

export const saveUserInfo = (userInfo) => {
  return {
    type: USER_INFO,
    userInfo: userInfo
  }
};

export const savePage = (page) => {
  return {
    type: PAGE_INDEX,
    page: page
  }
};