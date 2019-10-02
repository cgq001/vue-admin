<template>
    <div class="aside">
        <el-menu
            :collapse="icons"
            router
            :collapse-transition='false'
            :default-active="paths"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#343334"
            text-color="#fff"
            active-text-color="#FD38D5">
    
            <!-- <el-menu-item index="/index">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="/shop">商品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>管理员管理</span>
                </template>
                <el-menu-item index="/admin/index">管理员列表</el-menu-item>
                <el-menu-item index="/admin/adminlist">添加管理员</el-menu-item>
            </el-submenu> -->
     
            <!-- <el-menu-item v-for="item in routerList" :key="item.id" index="/index" v-if="item.children.length > 0" >
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item> -->
            <div v-for="item in routerList" :key="item.id" >
                    <el-submenu :index="item.id.toString()" v-if="item.children && item.children.length > 0 && item.meta.display==true">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span>{{item.label}}</span>
                        </template>
                        <el-menu-item v-show="items.meta.display" v-for="(items,indexs) in item.children" :key="indexs" :index="items.path">
                            <i :class="items.meta.icon"></i>
                            {{items.label}}
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item v-for="(items,indexs) in item.children" :key="indexs" :index="items.path" v-show="items.meta.display"  v-else-if="item.children && item.children.length > 0 && item.meta.display==false" >
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.label}}</span>
                    </el-menu-item>

                    <el-menu-item  v-show="item.meta.display" :index="item.path"  v-else >
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.label}}</span>
                    </el-menu-item>
            </div>
        </el-menu>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    methods: {
      handleOpen(key, keyPath) {
       // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
      //  console.log(key, keyPath);
      }
    },
    computed:{
        paths:function(){
           // console.log(this.$route.path)
            return this.$route.path
        },
        icons:function(){
            return this.$store.state.load.icons
        },
        routerList(){
            // console.log(this.$store.state.routerlists.routerList)
            return this.$store.state.routerlists.mentList
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo{
    min-height: 100%;
    background: #343334;
}
.el-menu{
    border: none;
}
</style>