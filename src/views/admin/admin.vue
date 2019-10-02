<template>
    <div class="admins">
            <el-button type="primary" @click="setJurisdiction">权限配置</el-button>


            <!-- 权限配置 -->
            <el-dialog
                title="权限配置"
                :visible.sync="JurisdictionOffs"
                width="70%">
                <Jurisdiction />
            </el-dialog>

    </div>
</template>

<script>
import Jurisdiction from '../../components/Jurisdiction'
export default {
    data(){
        return {
            JurisdictionOffs:false  //权限配置 弹出层
        }
    },
    methods:{
        setJurisdiction:function(){
            this.JurisdictionOffs=true
        }
    },
    components:{
        Jurisdiction
    }
}
</script>


<style lang="less" scoped>

</style>