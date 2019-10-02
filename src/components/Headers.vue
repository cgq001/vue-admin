<template>
    <div class="headers">
        <div class="headers-left">
           <div class="headers-left-top">
               <i :class="icons ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="iconsBtns"></i>
               {{router.meta.title}}
            </div>
           <div class="headers-left-bottom">
               <Leables v-for="(item,index) in tableList" :key="index" :names='item' @removeTable='removeTable' />
           </div>
        </div>
        <div class="headers-right">
            
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-avatar shape="square" :size="50" :src="userList.headImgUrl ? userList.headImgUrl : squareUrl"></el-avatar>
                    <span class="el-dropdown-link-names">{{userList.nickName}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                    
                </span>
                <el-dropdown-menu slot="dropdown" :split-button='true'>
                    <el-dropdown-item icon="el-icon-s-home">
                      
                            <span @click="goIndex">首页</span>
                   
                        
                    </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-switch-button" @click="quies">
                        <span @click="quies">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import Leables from './Leables'
export default {
    data(){
        return {
            squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
            tableList:[]
        }
    },
    methods:{
        quies:function(){
         //   console.log(15455)
            this.$store.commit('removeToken')
        },
        goIndex:function(){
            this.$router.push('/index')
        },
        removeTable(tag){
            

            for(let i=0;i<this.tableList.length;i++){
                if(this.tableList[i].path == tag){
                    this.tableList.splice(i,1)
                }
            }
            if(this.$route.path == tag){
                if(this.tableList.length>1){
                    this.$router.push(this.tableList[this.tableList.length-1])
                }else{
                     this.$router.push('/index')
                }
            }
            
        },
        iconsBtns(){
            this.$store.commit('tagTables')
        }
    },
    components:{
        Leables
    },
    computed: {
        userList(){
        
            return this.$store.state.load.userList
        },
        router:function(){
            return this.$route
        },
        icons:function(){
            return this.$store.state.load.icons
        }
    },
    watch:{
        router:{
            handler(news,olds){
                    if(news.meta.table){
                        let offs =  this.tableList.every((item,index)=>{
                                        return item.path !=news.path
                                    })
                            if(offs){
                                this.tableList.push(news)
                            }
                                
                    }       
            },
            immediate: true 
        }
    }
}
</script>

<style lang="less" scoped>
.headers{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    
    box-sizing: border-box;
}

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    line-height: 50px;
    display: inline-block;
    height: 50px;
    width: auto;
    display: flex;
    justify-content: flex-start;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-dropdown-link-names{
      display: inline-block;
      height: 50px;
      line-height: 50px;
      margin-left: 5px;
  }
.headers-left{
    width: calc(100% - 300px);
    min-width: 500px;
}
  .headers-left-top{
      width: 100%;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
  }
  .headers-left-top i{
      margin-right: 10px;
      cursor: pointer;
      font-size: 16px;
  }
   .headers-left-bottom{
      width: 100%;
      height: 34px;
      font-size: 12px;
      padding-top: 5px;
  }
</style>