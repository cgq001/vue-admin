<template>
    <div class="index">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div class="index-echarts-list" id="histogram">
                    
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div class="index-echarts-list" id="linechart">
                    
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div class="index-echarts-list" id="piechart">
                    
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    mounted(){
       this.histogram()
       this.linechart()
       this.piechart()
    },
    methods:{
        histogram(){
            let myChart = echarts.init(document.getElementById('histogram'));
                myChart.setOption({
                    title: {
                        text: '柱状图'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                })
        },
        linechart(){
            let myCharts = echarts.init(document.getElementById('linechart'));
                myCharts.setOption({
                    title: {
                        text: '柱状图'
                    },
                     xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                })
        },
        piechart(){
            let myCharts = echarts.init(document.getElementById('piechart'));
                myCharts.setOption({
                    title: {
                        text: '饼图'
                    },
                    series : [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: '55%',
                                    data:[
                                        {value:235, name:'视频广告'},
                                        {value:274, name:'联盟广告'},
                                        {value:310, name:'邮件营销'},
                                        {value:335, name:'直接访问'},
                                        {value:400, name:'搜索引擎'}
                                    ]
                                }
                            ]
                })
        }
    }
}
</script>

<style scoped>
.index{
    width: 100%;
    min-height: 100%;
    padding: 15px; 
    box-sizing: border-box;
    background: #F1F1F1;
}
.index-echarts-list{
    width: 100%;
    height: 500px;
    background: #ffffff;
    margin-bottom: 15px;
}
</style>