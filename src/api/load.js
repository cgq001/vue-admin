import https from '../https/index'

export function loads(data){
    return https({
        url: 'token',
        method: 'post',
        data:{
            ...data
        }
    })
}

export function getUsers(token){
    return https({
        url: 'username',
        method: 'post',
        data:{
            access_token: token
        }
    })
}