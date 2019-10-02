var Mock = require('mockjs')

Mock.mock('token','post',{
    token:'124656789abcdeftghijklmn'
})

Mock.mock('username', 'post',{
    data:{
        id:1,
        username: '15665666',
        nickName: '超级管理员',
        headImgUrl: null
    }
})

