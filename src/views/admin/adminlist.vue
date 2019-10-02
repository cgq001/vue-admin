<template>
    <div>
        <el-button type="primary" @click="addExcel">导出Excel</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        addExcel(){
             let idList=[
                            {
                                nickname: 'Nick',
                                name: '找好的呢',
                                idcard: '15662564'
                            }
                    ]
                        
                import("@/vendor/Export2Excel").then(excel => {
                        const tHeader = [
                                "昵称",
                                "真实姓名",
                                "身份证号码",
                                ];
                        const filterVal = [
                                "nickname",
                                "name",
                                "idcard",
                                ];
                    excel.export_json_to_excel2(tHeader, idList, filterVal, "导出文件");
            
});
        }
    }
}
</script>