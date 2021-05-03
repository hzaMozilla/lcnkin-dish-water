/**
 * Created by liaohuanyu on 2019/4/8.
 */
import axios from 'axios';
interface optionsType {
  userName: string,
  passWord: string,
  type: string
}

export function admin(options: optionsType) {
  let url;
  switch (options.type) {
    case '登陆':
      url = '/login/user/information';
    case '注册':
      url = '/test/user/signUp';
    default:
      break;
  }
  const data = Object.assign({}, { userName: '', password: '' }, options)

  return axios.post(url, data, { withCredentials: true }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getUserInfo() {
  let url = '/admin/user/getUserInfo';

  return axios.get(url, { withCredentials: true }).then((res) => {
    return Promise.resolve(res.data)
  })
}