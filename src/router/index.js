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
			title: '文件上传' ,
			icon: 'el-icon-user-solid',	
		},
		children: [
			{
				path: '',
				name: 'aboutindex',
				component: () => import('@/views/abouts/Index.vue'),
				meta:{
					hidden: false,
					title: '常规上传' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','wechat']
				},
			},
			{
				path: 'product',
				name: 'aboutproduct',
				component: () => import('@/views/abouts/Product.vue'),
				meta:{
					hidden: false,
					title: '类型判断' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','good']
				},
			},
			{
				path: 'slice',
				name: 'aboutslice',
				component: () => import('@/views/abouts/Slice.vue'),
				meta:{
					hidden: false,
					title: '切片上传' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','good']
				},
			}
		]
	},
	{
		path: '/goos',
		component: layout,
		meta:{
			hidden: false,
			title: '商品' ,
			icon: 'el-icon-user-solid',	
		},
		children: [
			{
				path: '',
				name: 'gooddetail',
				component: () => import('@/views/good/Detail.vue'),
				meta:{
					hidden: false,
					title: '商品SKU' ,
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
		path: '/echarts',
		component: layout,
		meta:{
			hidden: false,
			title: 'echarts' ,
			icon: 'el-icon-user-solid',	
		},
		children: [
			{
				path: 'index',
				name: 'echartsindex',
				component: () => import('@/views/echarts/Index.vue'),
				meta:{
					hidden: false,
					title: '常规图标' ,
					icon: 'el-icon-user-solid',	
					roles: ['admin','wechat','good']
				},
			},
			{
				path: 'sort',
				name: 'echartssort',
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
