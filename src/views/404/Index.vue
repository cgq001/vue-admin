<template>
    <div class="index">
        <div class="index-box">
            <svg404 class="index-box-icons" />
            <div class="index-box-name">你访问的页面被飞船带走了</div>
        </div>
    </div>
</template>

<script>
import svg404 from '../../assets/icon/404.svg'
export default {
    components :{
        svg404
    }
}
</script>

<style scoped>
.index{
    width: 100%;
    min-height: 100%;
    padding-top: 150px;
    box-sizing: border-box;
}
.index-box{
    width: 450px;
    height: auto;
    margin: 0 auto;
    /* border: 1px solid navajowhite; */
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
}
.index-box-icons{
    width: 300px;
    height: 300px;
    fill: currentColor;
    color: #F77F26;
}
.index-box-name{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    color: #F77F26;
    font-weight: bold;
}
</style>