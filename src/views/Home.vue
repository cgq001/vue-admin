<template>
  <div class="home">
    <el-container class="home-box">
        <el-aside class="home-aside" :width="icons ? '60px' : '220px' ">
            <Asides />
        </el-aside>
        <el-container>
          <el-header class="box-header">
              <Headers />
          </el-header>
          <el-main class="box-mains">
              <div class="box-mains-contnets">
                  <transition mode="out-in">
                      <router-view />
                  </transition>
              </div>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Asides from '../components/Aside.vue'
import Headers from '../components/Headers.vue'
export default {
  name: 'home',
  created(){
    
  },
  components: {
    Asides,
    Headers
  },
  computed:{
    icons:function(){
            return this.$store.state.load.icons
        }
  }
}
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.home-box{
  width: 100%;
  height: 100%;
}
.box-header{
  // line-height: 64px;
  
}
.box-mains{
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background: #EEEEEE;
}
.box-mains-contnets{
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.home-aside{
  background: #343334;
}

.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 0.5s;
}

.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: .5s;
}
</style>
