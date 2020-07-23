<template>
    <div class="index">
        <!-- <Loadings :visible='true' text='加载中' /> -->
    </div>
</template>

<script>
import Loadings from '../../components/good/Loadings'

export default {
    created(){
        Loadings({text: ''})
    },
    mounted(){
        // this.$loadings({text: '加载中'})
    },
    components: {
        // Loadings
    }
}
</script>

<style scoped>
.index{
    width: 100%;
    height: 100%;
}
</style>