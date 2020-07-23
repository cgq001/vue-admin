<template>
    <div class="loading">
         <transition name="loading-fade">
            <!--loading蒙版-->
            <div v-show="visible" class="loading-mask">
            <!--loading中间的图标-->
            <div class="loading-spinner">
                <i class="el-icon-loading"></i>
                <!--loading上面显示的文字-->
                <p class="loading-text">{{ text }}</p>
            </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
//   props: {
//   // 是否显示loading
//     visible: {
//       type: Boolean,
//       default: false
//     },
//     // loading上面的显示文字
//     text: {
//       type: String,
//       default: ''
//     }
//   }
    data(){
        return {
            visible: false,
            text: '加载中...'
        }
    }
}
</script>

<style scoped>
.loading{
    width: 100%;
    height: 100%;
}
.loading-fade{
    width: 100%;
    height: 100%;
}
.loading-mask{
    width: 100%;
    height: 100%;
    background: rgba(67,77,97, 0.7);
}
.loading-spinner{
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
}
.loading-spinner i{
    margin-right: 15px;
}
</style>