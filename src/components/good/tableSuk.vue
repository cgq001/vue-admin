<template>
    <div class="table-sku">
        <div class="table-sku-name">
            <span class="table-sku-name-span">还原</span>
        </div>
        <div class="table-sku-box">
            <el-table
            :data="tableData"
            style="width: 100%">
          
            
            <el-table-column label="商品规格">
                    <el-table-column
                    prop="province"
                    label="颜色"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="版本"
                    width="120">
                    </el-table-column>
            </el-table-column>
            <el-table-column
                prop="name"
                label="SKU自编码"
                width="220">
            </el-table-column>
            <el-table-column
                prop="name"
                label="SKU图片"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="库存"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="库存预警值"
                width="100">
            </el-table-column>
            <el-table-column
                prop="name"
                label="市场价"
                width="120">
            </el-table-column>
            <el-table-column
                prop="name"
                label="保低价"
                width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData: []
        }
    },
    methods:{
        handleEdit(){

        },
        handleDelete(){
            
        }
    }
}
</script>

<style scoped>
.table-sku{
    width: 100%;
    height: auto;
}
.table-sku-name{
    width: 100%;
    height: 40px;
    /* background: burlywood; */
    line-height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
}
.table-sku-name-span{
    padding: 5px 7px;
    background: #FC5F0B;
    border-radius: 3px;
    color: #ffffff;
    font-size: 12px;
    cursor: pointer;
}
.table-sku-box{
    width: 100%;
    height: auto;
    border-top: 2px solid #277CF0;
}
</style>

