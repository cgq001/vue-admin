<template>
    <div class="Jurisdiction">
            <el-tree
                :data="routerList"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps">
            </el-tree>
            <el-button type="primary" @click="JurisdictionBtns">确认保存</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            defaultProps: {
                children: 'children',
                label: 'label'
                }                  
        } 
    },
    methods:{
        JurisdictionBtns(){
            console.log(this.$refs.tree.getCheckedNodes());   //获取节点
            console.log(this.$refs.tree.getCheckedKeys());   //获取key(本站权限设计 为 后台返回key值为标准))
        }
    },
    computed: {
        routerList (){
            return this.$store.state.routerlists.routerList
        }
    },
}
</script>

<style lang="less" scoped>
.Jurisdiction{
    width: 100%;
    height: auto;
}
</style>