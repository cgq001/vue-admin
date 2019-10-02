import axios from 'axios'

import { Message,Loading } from 'element-ui';

import Cookies from 'js-cookie'

import store from '../stores/index.js'
// let loading;
// //开始动画
// function startLoading(){
//    // console.log('开始请求')
//     loading=Loading.service({
//         lock: true,
//         text: '拼命加载中...',
//         background: 'rgba(0,0,0,0.7)'
//     })
// }
// //结束动画
// function endLoading(){
//     //console.log('结束请求')
//     loading.close()
// }

// //https://www.easy-mock.com/mock/5d9074536fab956fd0e8d7d5/example/token

// //请求拦截
// let instance = axios.create({
//     baseURL: 'https://www.easy-mock.com/mock/5d9074536fab956fd0e8d7d5/example/',
//     timeout: 5000
//   });


// instance.interceptors.request.use(config=>{
//     //加载动画
//     let token = store.state.load.token
//    // console.log(token)

   
    
//     startLoading()

//   if(token){
//          config.headers.Authorization= token
//          //config.headers.Cookie= token
//     }

//     return config
// },error =>{
//     return Promise.reject(error)
// })

// instance.interceptors.response.use(response=>{
//     endLoading()

//     console.log(response.data)
//     if(response.data.ret ==  200 || response.ret == 200 || response.retCode == 200 || response.ret == 0 || response.retCode == 0 || response.code == 200 && response.data.msg){
//         Message({
//             message: response.data.msg,
//             type: 'success'
//           });
//     }else if(response.data.ret != 200 && response.data.msg){
//         Message({
//             message: response.data.msg,
//             type: 'error'
//           });
//     }

//     return response;

// },error =>{
//     Message({
//         message: '网络连接错误（后台不能连接，请联系系统管理员）',
//         type: 'error',
//         duration: 5 * 1000
//       })
//    endLoading()
//   // Message.error(error.response.data)
//    return Promise.reject(error)
// })
export default axios;