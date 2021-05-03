import { fromJS } from "immutable";
import actionTypes from "./action";
import { IUserName, defaultState, IAction } from 'src/package/store/storeType';
console.log(defaultState);
const userName = (state: IUserName = defaultState.userName, action: IAction) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      console.log(action, action.userName);
      return action.userName;
    // case actionTypes.SET_PASSWORD:
    //   return state.set('password', action.password);
    //   break;
    // case actionTypes.SET_USERNAME:
    //   return state.set('userName', action.password);
    //   break
    // case actionTypes.CHG_PASSWORD:
    //   return state.set('password', action.text);
    //   break;
    // case actionTypes.CHG_USERNAME:
    //   return state.set('userName', action.text);
    //   break;
    default:
      return state
  }
}
export default userName;