import Cookies from 'js-cookie'
// 用户信息
import router from '../router/index.js'
const load = {
    state: {
        token: '',
        userList:{
            username: ''
        },
        icons: false
    },
    mutations :{
        addToken(state,src){

            if(src.checked){
                Cookies.set('token', src.token , { expires: 7 })
            }else{
                Cookies.set('token', src.token )
            }
            
        },
        setToken(state,token){
    
            state.token=token
        },
        removeToken(state){
            state.token=''
            state.userList={}

            
            Cookies.remove('token')

            router.push('/loading')
        },
        setUser(state,src){
            state.userList=src
        },
        tagTables(state){
            state.icons=!state.icons
        }
    },
    actions:{

    }
}

export default load;