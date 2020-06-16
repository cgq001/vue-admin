<template>
    <div class="Index">
        <div class="Index-box">
            <div class="Index-box-name">
                超级管理系统
            </div>
            <div class="index-box-from">
                <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="index-box-from-box">
                    <el-form-item prop="username" style="margin-bottom: 35px;">
                        <el-input prefix-icon="el-icon-user" v-model="loginForm.username" class="index-box-from-input" size="medium"></el-input>
                    </el-form-item>
                     <el-form-item prop="password" style="margin-bottom: 35px;">
                        <el-input prefix-icon="el-icon-unlock" v-model="loginForm.password" class="index-box-from-input" size="medium"  show-password ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="index-box-from-submit" :loading="loading" @click="loginSubmit('loginForm')"  @keyup.enter.native="loginSubmit('loginForm')">登 录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        let letterRule = (rule, value, callback) => {
            let reg = /^[a-zA-Z0-9_-]{4,18}$/
            if (value === '') {
                callback(new Error('输入内容不能为空'));
            }else if(!reg.test(value)) {
                callback(new Error('请输入字母、数字、下划线'));
            }else{
                callback();
            }
        };
        return {
            loading: false ,
            loginForm:{
                username: '',
                password: ''
            },
            loginRules:{
               username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 4, max: 16, message: '请输入用户名长度在4~16位之间', trigger: 'blur' },
                    { validator: letterRule, trigger: 'blur' }
               ],
               password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 4, max: 18, message: '请输入密码长度在4~18位之间', trigger: 'blur' },
                    { validator: letterRule, trigger: 'blur' }
               ]
            }
        }
    },
    methods:{
        loginSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true
                    this.login()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        login(){
            this.$store
                .dispatch('user/login',{username: this.loginForm.username})
                .then(()=>{
                    this.loading = false
                    // 登陆成功后重定向
                    this.$router.push({
                        path: this.$route.query.redirect || '/'
                    })
                     
                })
                .catch(err=>{
                    this.loading = false
                    this.$message.error(err);
                })
        }
    }
}
</script>

<style scoped>
.Index{
    width: 100%;
    height: 100%;
    background: #2D3A4B;
    padding-top: 120px;
    box-sizing: border-box;
}
.Index-box{
    width: 450px;
    height: 350px;
    /* border: 1px solid #ffffff; */
    border-radius: 5px;
    margin: 0 auto;
    padding: 10px 15px;
    box-sizing: border-box;
}
.Index-box-name{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 15px;
}
.index-box-from{
    width: 100%;
    height: auto;
}
.index-box-from-submit{
    width: 100%;
}

</style>
<style>
.index-box-from-input input{
    background: #2D3A4B;
    color: #ffffff;
}
</style>