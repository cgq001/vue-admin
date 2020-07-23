<template>
    <div class="detail">
        <el-tabs v-model="activeNumber" @tab-click="targetNumber" class="detail-tag">
            <el-tab-pane label="基础信息" name="1">

            </el-tab-pane>
            <el-tab-pane label="商品属性" name="2">
                
            </el-tab-pane>
            <el-tab-pane label="商品规格" name="3">
                <Sku />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Sku from '../../components/good/Sku'

export default {
    data(){
        return {
            activeNumber: '3'
        }
    },
    methods: {
        targetNumber(tab, event){
            console.log(tab.name)
        }
    },
    components:{
        Sku
    }
}
</script>

<style>
.detail{
    width: 100%;
    min-height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
.detail .detail-tag{
    width: 100%;
    height: 100%;
    /* background: burlywood; */
}
</style>