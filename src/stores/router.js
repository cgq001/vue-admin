// 路由信息
const router = {
    state: {
        routerList:[],
        mentList:[]
    },
    mutations :{
       serRouterList(state,str){   //配置权限
            state.routerList=str
       },
       setMents(state,str){    //设置导航栏
            state.mentList=str
       }
    },
    actions:{

    }
}

export default router;