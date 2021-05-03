// import axios from 'axios';

// class Api {
//   constructor() {

//     this.httpUpload = axios.create({
//       // baseURL: 'http://81.69.180.249:5081',
//       timeout: 20 * 60 * 1000,
//       headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         'X-TC-Language': 'zh-CN'
//       },
//       withCredentials: true // 允许携带cookie
//     })
//   }

//   this.httpUpload.interceptors.response.use((response) => {
//     const { status, data } = response;
//     if (status === 200) {
//       if (response.data.Response && response.data.Response.Error) {
//         if (response.data.Response.Error.Code == 'AuthFailure') {
//           message.error({ content: response.data.Response.Error.Message });
//           Cookie.remove('ticket');
//           Cookie.remove('token');
//           // 跳转回登陆页面，建议弄成环境变量
//           // @ts-ignore
//           window.location.href = `${document.referrer}/login.html#/`;
//         }
//         return Promise.reject(response.data.Response.Error);
//       }
//       return Promise.resolve(response);
//     }
//   }, error => {
//     let { status } = error.response
//     if (status) {
//       switch (status) {
//         // 404请求不存在
//         case 404:

//           break;
//         // 其他错误，直接抛出错误提示
//         default:

//       }
//       return Promise.reject(error.response);
//     }
//   });

// }
// export const http = axios.create({
//   // baseURL: 'http://81.69.165.55',
//   timeout: 20 * 60 * 1000,
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//     'X-TC-Language': 'zh-CN'
//   },
//   withCredentials: true // 允许携带cookie
// })
// // 添加请求拦截
// http.interceptors.response.use((response) => {
//   const { status, data } = response;
//   if (status === 200) {
//     if (response.data.Response && response.data.Response.Error) {
//       if (response.data.Response.Error.Code == 'AuthFailure') {
//         message.error({ content: response.data.Response.Error.Message });
//         Cookie.remove('ticket');
//         Cookie.remove('token');
//         // 跳转回登陆页面，建议弄成环境变量
//         // @ts-ignore
//         window.location.href = `${document.referrer}/login.html#/`;
//       }
//       return Promise.reject(response.data.Response.Error);
//     }
//     return Promise.resolve(response);
//   }
// }, error => {
//   let { status } = error.response
//   if (status) {
//     switch (status) {
//       // 404请求不存在
//       case 404:

//         break;
//       // 其他错误，直接抛出错误提示
//       default:

//     }
//     return Promise.reject(error.response);
//   }
// });