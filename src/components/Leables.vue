<template>
    <span class="leables"  :class=" router== names.path ? 'active' : ''" >
        <router-link :to="names.path">
            {{names.meta.title}}
        </router-link>
        <i class="el-icon-close" @click="handleClose(names.path)"></i>
    </span>
    
</template>

<script>
export default {
    props:['names'],
    methods:{
        handleClose(tag){
            this.$emit('removeTable',tag)
        }
    },
    computed:{
        router(){
            return this.$route.path
        }
    },
    watch:{
        router(news){
            
        }
    }
}
</script>

<style lang="less" scoped>
.leables{
    padding: 5px 10px;
    border: 1px solid #F8C56E;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 5px;
}
.leables a{
    color: #F8C56E;
    text-decoration: none;
}
.active {
    background: #F8C56E;
}
.active a{
    color: #ffffff!important;
}
</style>