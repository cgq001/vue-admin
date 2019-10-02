import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

import store from '../stores/index.js'
Vue.use(Router)

import { routerListFun , routerListStr } from './Jurisdiction'

// 格式化 按需加载
function _import (file){
    return () => import('@/views/' + file + '.vue')
}
/**
 *  let arr=[1,2,3,20,21,22]   //权限列表数组（有后台返回）
 * 路由书写规则
 *    1、只有一级路由（实际为二级路由）：
 *     {
          id: 2,                                  //ID全局不能重复
          path: '/index',                         //路由路径 全局不能重复
          name: 'index',                          //名字，全局不能重复，存在二级路由，则一级路由不能有名字
          label: '首页',                          // 页面名称(用于权限配置时 显示名称使用)
          component: _import('Index/Index'),      // 文件地址（此处对应的是views目录）
          meta:{
            title: '首页',                        //页面名称（横向teble标签切换）
            table: true,                          // 是否显示 teable 切换按钮
            display:true,                         //  是否在侧边导航菜单显示
            icon: 'el-icon-s-home'                //  侧边导航的icon图标
          }
        }
      2、包含二级路由（实际为三级路由）
        {
            id:20,                                  //ID全局不能重复
            path: '/admin',                         //路由路径 全局不能重复(此处为父级))
            label: '管理员列表',                     // 页面名称(用于权限配置时 显示名称使用)
            component: _import('admin/index'),      // 文件地址（此处对应的是views目录）注意：此文件下 应包含（router-view 标签 来显示子页面）
            meta:{
                title: '管理员列表',                   //页面名称（横向teble标签切换）
                table: true,
                display:true,                         //  是否在侧边导航菜单显示(注意 这里是父级，如果为false,则子级不在折叠)
                icon: 'el-icon-s-custom'              //  侧边导航的icon图标
            },
            children:[
              {
                id:21,                              //ID全局不能重复
                path: '/admin/index',               //路由路径 全局不能重复(此处为父级))
                label: '管理员列表',                  // 页面名称(用于权限配置时 显示名称使用)
                component: _import('admin/admin'),   // 文件地址（此处对应的是views目录）
                meta:{
                  title: '管理员列表',                //页面名称（横向teble标签切换）
                  table: true,                      // 是否显示 teable 切换按钮
                  display:true,                     //  是否在侧边导航菜单显示
                  icon:'el-icon-tickets'            //  侧边导航的icon图标
                }
              }
            ]
          }
 * 
 * 
 * 
*/

let routerLists=[
  {
    id:1,
    path: '',
    label: '首页',
    redirect: '/index',
    meta:{
      title: '首页',
      table: true,
      display: false,
      icon: 'el-icon-s-home'
    }
  },
  {
    id: 2,
    path: '/index',   
    name: 'index',
    label: '首页',
    component: _import('Index/Index'),
    meta:{
      title: '首页',
      table: true,
      display:true,
      icon: 'el-icon-s-home'
    }
  },
  {
    id: 3,
    path: '/shop',
    name: 'shop',
    label: '商品列表',
    component: _import('Shop/Shop'),
    meta:{
      title: '商品列表',
      table: true,
      display:true,
      icon: 'el-icon-s-operation'
    }
  },
  {
    id:20,
    path: '/admin',
    label: '管理员列表',
    component: _import('admin/index'),
    meta:{
        title: '管理员列表',
        table: true,
        display:true,
        icon: 'el-icon-s-custom'
    },
    children:[
      {
        id:21,
        path: '/admin/index',
        label: '管理员列表',
        component: _import('admin/admin'),
        meta:{
          title: '管理员列表',
          table: true,
          display:true,
          icon:'el-icon-tickets'
        }
      },
      {
        id:22,
        path: '/admin/adminlist',
        label: '添加管理员',
        component: _import('admin/adminlist'),
        meta:{
          title: '添加管理员',
          table: true,
          display:true,
          icon:'el-icon-document-remove'
        }
      }
    ]
  }
]






let routerAlls=[
        {
          path: '/',
          component: Home
        }
]

// 先把路由信息对象字符串化，然后去除component字段 ，再传递给 权限配置表
let routerListString =JSON.stringify(routerLists)
 let src= routerListStr(routerListString)
 store.commit('serRouterList',src)


 let arr=[1,2,3,20,21,22]   //权限列表数组

 //根据权限配置表和路由信息对象 获取本用户的路由信息表，并添加到 home组件的二级路由里
routerAlls[0].children = routerListFun(arr,routerLists)

//根据权限配置表和路由信息对象 获取本用户的菜单列表
let mentParse =JSON.parse(JSON.stringify(src))
let menuList = routerListFun(arr,mentParse)   
store.commit('setMents',menuList)


// 注册路由
let routers =new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../views/Load/Loading.vue'),
      meta:{
        title: '登陆',
        table: false
      }
    }
  ]
})

// 将筛选后的路由信息对象添加至路由表
routers.addRoutes(routerAlls)


// 进行全局导航守卫
routers.beforeEach((to,from,next)=>{
    
      if(to.path != '/loading'){
          
          let username=store.state.load.userList.username
          
          if(username){
            next()
          }else{

            next({
              path:'/loading',
              query:{
                path:to.path
              }
            }) 
          }
      }else{
        next()
      }   
})

export default routers;
