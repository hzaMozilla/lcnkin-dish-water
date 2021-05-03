import { USER_INFO, PAGE_INDEX } from './action-type';
// redux需要设置默认值
const defaultInfo = {
  userInfo: {
    loginStatus: '',
    userName: '',
    token: '',
    openId: '',
  },
  pageIndex: '',
  car: {}
};
export default (state = defaultInfo, action = {}) => {

  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.pageIndex
      }
    default:
      return state;
  }
}