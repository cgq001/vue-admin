// 路由信息
const router = {
    state: {
        routerList:[],
        mentList:[]
    },
    mutations :{
       serRouterList(state,str){
            state.routerList=str
       },
       setMents(state,str){
            state.mentList=str
       }
    },
    actions:{

    }
}

export default router;