import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/Index.vue'

Vue.use(VueRouter)

// 每个用户都有的路由
export const constRouter = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/Index.vue')
	}, 
	{
		path: '/',
		name: 'home',
		component: layout,
		meta:{
			hidden: false,
			title: '首页' ,
			icon: 'el-icon-user-solid',
			
		},
		children:[
			{
				path: '',
				name: 'homeindex',
				component: () => import('@/views/home/Index.vue'),
				meta:{
					hidden: false,
					title: '工作台' ,
					icon: 'el-icon-user-solid',	
				},
			}
		]
	}
]
// 需要根据用户权限判定的路由
export const asyncRoutes = [
	{
		path: '/about',
		component: layout,
		meta:{
			hidden: false,
			title: '关于' ,
			icon: 'el-icon-user-solid',	
		},
		children: [
			{
				path: '',
				name: 'aboutindex',
				component: () => import('@/views/about/Index.vue'),
				meta:{
					hidden: false,
					title: '关于我们' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','wechat']
				},
			},
			{
				path: 'product',
				name: 'aboutproduct',
				component: () => import('@/views/about/Product.vue'),
				meta:{
					hidden: false,
					title: '关于产品' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','good']
				},
			}
		]
	},
	{
		path: '/good',
		component: layout,
		meta:{
			hidden: false,
			title: '产品' ,
			icon: 'el-icon-user-solid',	
		},
		children: [
			{
				path: 'index',
				name: 'goodindex',
				component: () => import('@/views/good/Index.vue'),
				meta:{
					hidden: false,
					title: '产品列表' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','wechat','good']
				},
			},
			{
				path: 'sort',
				name: 'goodsort',
				component: () => import('@/views/good/Sort.vue'),
				meta:{
					hidden: false,
					title: '分类列表' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','good']
				},
			}
		]
	},
	{
		path: '/404', 
		component: layout,
		meta:{
			hidden: false,
			title: '404' ,
			icon: 'el-icon-user-solid',	
		},
		children: [
			{
				path: '',
				name: 'goodindex',
				component: () => import('@/views/404/Index.vue'),
				meta:{
					hidden: false,
					title: '404' ,
					icon: 'el-icon-user-solid'
				},
			},
		]

	},
	{
		path: '*', 
		redirect: '/404'
	}
]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: constRouter
})

export default router
