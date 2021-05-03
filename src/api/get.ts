import axios from "axios";

export const getDutiesPage = ({ query = {}, config = { loading: false } } = {}) => {
  return axios.request({
    params: query,
    method: 'get',
    url: '/json',
    ...config
  })
}

export const getProvinceList = ({ query = {}, config = { loading: false } } = {}) => {
  return axios.request({
    params: query,
    method: 'get',
    url: 'http://5d79e6fe9edf7400140a90cf.mockapi.io/api/findProvinceList',
    ...config
  })
}