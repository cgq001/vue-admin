<template>
    <div class="sku">
        <el-row>
            <!-- 规格 -->
            <el-col :span="24" class="sku-title">
                <div class="suk-name">商品规格</div>
                <div class="suk-sort">
                    <div class="suk-sort-list" v-for="(item,index) in formatArr" :key="index">
                        {{item.name}}
                    </div>
                     <div class="suk-sort-icon" @click="addName">
                        <i class="el-icon-plus"></i>
                    </div>
                </div>
            </el-col>
            <!-- 选择规格 -->
            <el-col :span="24" class="sku-select">
                <div class="suk-name"></div>
                <div class="sku-select-box">
                    <div class="sku-select-list" v-for="(item,index) in formatArr" :key="index">
                        <div class="sku-select-list-name">
                            {{item.name}}
                        </div>
                        <div class="sku-select-list-options">
                            <el-checkbox  v-for="(items,indexs) in item.domains" :key="indexs" v-model="items.checked">{{items.value}}</el-checkbox>
                        </div>
                    </div>
                </div>
            </el-col>
            <!-- 选择规格 -->
            <el-col :span="24" class="sku-select">
                <div class="suk-name"></div>
                <div class="sku-table">
                    <TableSuk />
                </div>
            </el-col>
        </el-row>
        <!-- 添加规格弹出层 -->
        <el-dialog title="添加规格" :visible.sync="formatShow" :close-on-click-modal='false'>
            <el-form :model="formatForm" ref="formatForm" label-width="100px" class="formatForm-dynamic">
                <el-form-item
                    prop="name"
                    label="规格名称:"
                    :rules="[
                    { required: true, message: '请输入规格名称', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: ['blur', 'change']  }
                    ]"
                >
                    <el-input v-model="formatForm.name"></el-input>
                </el-form-item>
                <el-form-item
                    v-for="(domain, index) in formatForm.domains"
                    :label="'规格值' + index"
                    :key="domain.key"
                    :prop="'domains.' + index + '.value'"
                    :rules="{
                    required: true, message: '规格值不能为空', trigger: 'blur'
                    }"
                >
                    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('formatForm')"> 提 交 </el-button>
                    <el-button @click="addDomain">新增规格值</el-button>
                    <el-button @click="resetForm('formatForm')">清空数据</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import TableSuk from '../../components/good/tableSuk'

export default {
    data(){
        return {
            formatShow: false,
            formatForm: {
                domains: [{
                    value: '',
                    checked: false
                }],
                name: ''
            },
            checked: true,
            formatArr: [
                {
                    name: '颜色',
                    id: 's1',
                    domains: [
                        {
                            value: '蓝色',
                            checked: false
                        },
                        {
                            value: '红色',
                            checked: false
                        },
                        {
                            value: '橙色',
                            checked: false
                        }
                    ]
                },
                {
                    name: '版本',
                    id: 's2',
                    domains: [
                        {
                            value: '32G',
                            checked: false
                        },
                        {
                            value: '64G',
                            checked: false
                        },
                        {
                            value: '128G',
                            checked: false
                        },
                        {
                            value: '256G',
                            checked: false
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        addName(){
            this.formatShow = true
            let uId =  's1'
            if(this.formatArr.length > 0){
                uId = 's' + (this.formatArr.length + 1 )
            }
            this.formatForm ={
                    domains: [{
                        value: '',
                        checked: false
                    }],
                    name: '',
                    id: uId
                }
                console.log(this.formatForm)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                console.log(this.formatForm)
                let formatForm = JSON.parse(JSON.stringify(this.formatForm))
                this.formatArr.push(formatForm)
                this.$refs[formName].resetFields();

            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.formatForm.domains.indexOf(item)
            if (index !== -1) {
            this.formatForm.domains.splice(index, 1)
            }
        },
        addDomain() {
            this.formatForm.domains.push({
                value: '',
                key: Date.now(),
                checked: false
            });
        },
        skuWatch(arr){
            let sukAll = []
            let sukArray = []
            for(let i=0; i<arr.length; i++){
                let sukList = {
                    name: arr[i].name,
                    id: arr[i].id,
                    children: []
                }
                for(let k=0; k<arr[i].domains.length; k++){
                    if(arr[i].domains[k].checked){
                        sukList.children.push(arr[i].domains[k].value)
                    }
                }
                if(sukList.children.length > 0){
                    sukAll.push(sukList)
                    sukArray.push(sukList.children)
                }
            }
            console.log(sukAll)
            // if(sukArray.length > 0){
            //     let listSku = this.combine(sukArray)
            //     console.log(listSku)
            // }
           
        },
        combine([...chunks]){
            console.log(chunks)
             let res = []

            let helper = function (chunkIndex, prev) {
                let chunk = chunks[chunkIndex]
                let isLast = chunkIndex === chunks.length - 1
                for (let val of chunk) {
                let cur = prev.concat(val)
                if (isLast) {
                    // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
                    
                    res.push(cur)
                    
                } else {
                    helper(chunkIndex + 1, cur)
                }
                }
            }

            // 从属性数组下标为 0 开始处理
            // 并且此时的 prev 是个空数组
            helper(0, [])

            return res
        }
    },
    components: {
        TableSuk
    },
    watch:{
        formatArr:{
            handler(news,olds){
                let data = [
                    {
                        1: ''
                    }
                ]
                // console.log(news)
                this.skuWatch(news)
            },
            deep: true,
            immediate: true
        }
    }
}


let arr = [
    {
        s1: '蓝色',
        s2: '32G',
        s3: '华为',
        number: 8
    }
]
</script>

<style scoped>
/* 规格 */
.sku-title{
    margin-bottom: 10px;
}
.suk-name{
    width: 120px;
    height: 50px;
    /* background: yellow; */
    line-height: 50px;
    letter-spacing:2px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(67,77,97,1);
}
.sku-title{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
}
.suk-sort{
    flex: 1;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.suk-sort-list{
    display: inline-block;
    /* height: 30px; */
    padding: 7px 15px ;
    border-radius: 3px;
    border:1px solid #CCCDCD;
    font-size: 14px;
    color: rgba(67,77,97,1);
    cursor: pointer;
    transition: all 0.3s;
    margin-right: 10px;
}
.suk-sort-list:hover{
    border-color: #FA1A34;
    color: #FA1A34;
}
.suk-sort-icon{
    width: 35px;
    height: 35px;
    background: #3E89F0;
    border-radius: 3px;
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
}
/* 选择规格 */
.sku-select{
    margin-bottom: 10px;
    display: flex;
}
.sku-select-box{
    flex: 1;
    border-radius: 3px;
    border: 1px solid #EFEFEF;
    border-top: 2px solid #277CF0;
}
.sku-select-list{
    width: 100%;
    height: 50px;
    display: flex;

}
.sku-select-list-name{
    width: 200px;
    height: 100%;
    border-right: 1px solid #EFEFEF;
    padding: 0 20px;
    box-sizing: border-box;
    text-align: right;
    line-height: 50px;
    font-size: 14px;
    font-weight: bold;
    color: #3D4857;
}
.sku-select-list-options{
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}
/* 规格表 */
.sku-table{
    flex: 1;
    height: auto;
}
</style>

<style>
.formatForm-dynamic .el-form-item__content{
    display: flex;
}
.formatForm-dynamic .el-input--small{
    margin-right: 15px;
}
</style>