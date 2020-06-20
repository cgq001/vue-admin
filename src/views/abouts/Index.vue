<template>
    <div class="index">
        <div class="index-box">
            <!-- 本地上传进度 -->
            <div class="index-progress">
                <div class="index-progress-name">本地上传进度:</div>
                <div class="index-progress-number">
                    <el-progress :percentage="scale" :status="scaleName ? scaleName : null "></el-progress>
                </div>
            </div>
            <!-- 拖拽区域 -->
            <div class="index-drag" 
                ref="updataDrag"
                @dragover="updataDragover" 
                @dragenter="updataDragenter"
                @dragleave="updataDragleave"
                @drop="updateDrop">

                <div class="index-drag-iconBox">
                    <span class="el-icon-upload"></span>
                </div>
                <div class="index-drag-message">
                    <span class="index-drag-message-titles">将文件拖动到此处，或</span>
                    <label for="file" class="index-drag-message-label">
                        <input class="index-drag-message-input" type="file" id="file" name="file" @change="manualChange" />
                        <span class="index-drag-message-manual">点击上传</span>
                    </label>
                </div>
            </div>
            <!-- 本地上传进度 -->
            <div class="index-progress">
                <div class="index-progress-name">服务器上传进度:</div>
                <div class="index-progress-number">
                    <el-progress :percentage="network" :status="networkName ? networkName : null "></el-progress>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            scale: 0 ,// 本地上传进度
            scaleName: null,
            network: 0 , // 网络上传
            networkName: null
        }
    },
    methods:{
        // 当被拖动的对象在另一对象容器范围内拖动时触发此事件
        updataDragover(ev){
            // console.log(ev)
            ev.preventDefault()
            //  return false;
        },
        // 被鼠标拖动的对象进入其容器范围内时触发此事件
        updataDragenter(){
            this.scaleName = null
            // 当被拖拽元素进入 目标区域时, 目标边框变为 蓝色
            this.$refs.updataDrag.style.borderColor = '#4B87FF'
            this.$refs.updataDrag.style.background = '#F7F7F8'
        },
        // 当被鼠标拖动的对象离开其容器范围内时触发此事件
        updataDragleave(){
            // 当被拖拽元素离开 目标区域时, 目标边框变为 灰色
            this.$refs.updataDrag.style.borderColor = '#A3A3A3'
            this.$refs.updataDrag.style.background = '#ffffff'
        },
        // 在一个拖动过程中，释放鼠标键时触发此事件
        updateDrop(ev){
            
            let oFile = ev.dataTransfer.files[0];
                this.readerFile(oFile)
            ev.preventDefault()
        },
        // 手动上传文件
        manualChange(ev){
            let oFile = ev.target.files[0]
                this.readerFile(oFile)
        },
        // 读取文件
        readerFile(oFile){
            let This = this
            var reader = new FileReader();
            //读取成功
            reader.onload = function(ev){
                
                // 转 Base64
                let txt = ev.target.result;
                // 分号位置
                let semicolonIndex = txt.indexOf(';')
                // 冒号位置
                let colonIndex = txt.indexOf(':')
                // 文本类型
                let txtType = txt.slice(colonIndex + 1,semicolonIndex)
                // 详细类型
                let types = ''
                let format = ''

                // 这里 不知道 在Mac下是不是('\')呢?  哈哈
                let txtTypeArr = txtType.split('/')
                    if(txtTypeArr[0] === 'image'){
                        console.log('图片: 类型为' + txtTypeArr[1])
                        // Base64 转 图片文件
                        let images = This.baseImage(txt,'abc.' + txtTypeArr[1])

                         let params = new FormData()
                            params.append('file',images)  // 

                        This.submitUpdata(params)
                    }
                    if(txtTypeArr[0] === 'video'){
                        console.log('视频: 类型为' + txtTypeArr[1])

                        let params = new FormData()
                            params.append('file',oFile)  // 

                        This.submitUpdata(params)
                    }


            };
            reader.onloadstart = function(){
                console.log('读取开始');
                This.scaleName = null
            };
            reader.onloadend = function(){
                console.log('读取结束');
                This.scaleName = 'success'
            };
            reader.onabort = function(){
                console.log('中断');
                This.scaleName = 'exception'
            };
            reader.onerror = function(){
                console.log('读取失败');
                This.scaleName = 'warning'
            };
            reader.onprogress = function(ev){
            var scale = ev.loaded/ev.total;
                if(scale>=0.5){
               
                reader.abort();
                }
                // oM.value = scale*100;
                This.scale = parseInt(scale*100)
                console.log(This.scale)
            };
            reader.readAsDataURL(oFile); // ,'base64'
        },
        // Base64 转 图片
        baseImage(dataurl, filename) {
            let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
            return new File([u8arr], filename, {type:mime});
        },
        // 上传
        submitUpdata(file){
            
            let This = this
            This.networkName = null
            axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                data: file,
                headers: {'Content-Type': 'multipart/form-data'},
                onUploadProgress:function(progress){
                    // 上传处理进度事件
                    
                    let network = parseInt((progress.loaded/progress.total) * 100) 

                        This.network = network
                        console.log(This.network)
                        if(progress.loaded == progress.total){
                            This.networkName = 'success'
                        }else{
                            This.networkName = null
                        }
                },
                onDownloadProgress:function(progress){
                    // 为下载处理进度事件
                }
            })
        }

    }
}
</script>

<style scoped>
.index-box{
    width: 100%;
    height: auto;
    padding: 15px;
    box-sizing: border-box;
}
.index-progress{
    width: 450px;
    height: 60px;
    /* background: chartreuse; */
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
}
.index-progress-name{
    width: 120px;
    height: 60px;
    font-size: 14px;
    font-weight: bold;
    line-height: 60px;
    /* background: chocolate; */
}
.index-progress-number{
    flex: 1;
    height: 60px;
    padding: 22px;
    box-sizing: border-box;
}
.index-drag{
    width: 450px;
    height: 300px;
    border: 2px dashed;
    border-color: #A3A3A3;
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.index-drag-iconBox{
    width: 100%;
    height: 60px;
    /* background: brown; */
    text-align: center;
    font-size: 50px;
    line-height: 60px;
    color: #606266;
}
.index-drag-message{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.index-drag-message-titles{
    font-size: 14px;
    color: #606266;
}
.index-drag-message-manual{
    font-size: 14px;
    color: #4B87FF;
    cursor: pointer;
}
.index-drag-message-label{
    width: 120px;
    height: 50px;
    height: auto;
    position: relative;
    overflow: hidden;
    /* background: chartreuse; */
    
}
.index-drag-message-input{
    position: absolute;
    left: -100px;
    top: -100px;
    z-index: -1;
    display: none;
}
</style>