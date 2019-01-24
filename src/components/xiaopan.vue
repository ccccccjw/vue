<template>
<div>
    <div class="background_image"></div>
    <div class="frame">
    <div class="top">
        <div class="logo"></div>
        <div class="pone">真实房源，用心服务</div>
        <button class="place"><div class="placep">温州</div><div class="triangle_down"></div></button>
        <div class="menu"><button>新房</button><button>二手房</button><button>租房</button><button>商业地产</button></div>
        <div class="login_frame"><i class="iconfont icon-04"></i><button>登录</button><button>经纪人登录</button></div>
    </div>
    <div class="search_frame">
        <div class="logotwo"></div>
        <div class="search_frame_ul">
        <button name="bt" class="btone" @click="btchange">新房</button>
        <button name="bt" class="bttwo" @click="btchange">二手房</button>
        <button name="bt" class="btthree" @click="btchange">租房</button>
        <button name="bt" class="btfour" @click="btchange">商业地产</button></div>
        <div class="triangle_downtwo"></div>
        <input class="search_input"><button class="search"><i class="iconfont icon-sousuo"></i></button>
    </div>
</div>
</div>
</template>
<script>
export default {
   data () {
    return {
    }
    },
    methods:{  
        btchange: function(){
            var bt=document.getElementsByName("bt");
            var down=document.getElementsByClassName("triangle_downtwo")[0];
            for( let a=0; a<4; a++){
            bt[a].onmousedown=function(){
            for(let b=0; b<4; b++){
            bt[b].style.background = 'none';
            }
     //   startMove(80*a+60);
        this.style.background = '#4565bb';
        down.style.left=(80*a+60) +'px';
    }
}
        }
    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
.frame{
    position: fixed;
    top: 0;
    left: calc(50% - 595px);
    margin-top:30px;
}
.top{
    position: relative;
}
.logo{
    width: 168px;
    height: 36px;
    background: url(../assets/xplogo.png) no-repeat;
    background-size:100%;
    position: absolute;
    top: 0px;
    left: 30px;
}
.logotwo{
    width: 220px;
    height: 48px;
    background: url(../assets/xplogo2.png) no-repeat;
    background-size:100%;
    position: absolute;
    top: 20px;
    left: 30px;
}
.pone{
    width: 150px;
    color: #fff;
    font-size: 14px;
    position: absolute;
    top: 18px;
    left: 210px;
}
.place{
    border: none;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 15px;
    left: 350px;
    padding: 3px 10px;
    border-radius: 10px;
    width: 59px;
}
.placep{
    color: #fff;
    display: inline-block;
}
.triangle_down{
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #fff;
    display: inline-block;
}
.menu{
    width: 230px;
    position: absolute;
    top: 15px;
    left: 750px;
}
.menu button{
    border: none;
    color: #fff;
    background: transparent;
    margin-right: 20px;
    outline: none;
}
.login_frame{
    width: 250px;
    position: absolute;
    top: 15px;
    left: 1030px;
}
.login_frame button{
    border: none;
    color: #fff;
    background: transparent;
    padding: 0  10px;
    border-right: 1px solid #fff;
    outline: none;
}
.login_frame button:last-child{
    border: none;
}
.icon-04{
    color: #fff;
}
.search_frame{
    width: 880px;
    height: 250px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    top: 280px;
    left: 155px;
}
.search_frame_ul{
    position: absolute;
    top: 95px;
    left: 30px;
}
.search_frame button{
    border: none;
    width: 80px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    float: left;
    text-align: center;
    background: transparent;
    outline: none;
}
.search_input{
    width: 780px;
    height: 50px;
    position: relative;
    top: 160px;
    left: 30px;
    border: none;
    outline: none;
}
.search
{
    width: 130px !important;
    height: 50px !important;
    background-color: #4565bb !important;
    position: absolute;
    top: 160px;
    left: 680px;
}
.triangle_downtwo{
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid #fff;
    display: inline-block;
    position: absolute;
    top: 150px;
    left: 60px;
    transition:left .3s;
}
.search_frame button:first-child{
    background: #4565bb;
}
@media screen and (min-width:1920px){
    .background_image{
        width: 1920px;
        height: 914px;
        background: url(../assets/xpbk_min1.png) no-repeat;
        background-size:100%;
        margin: 0 auto;        
    }
}
@media screen and (max-width:1919px){
    .background_image{
        width: 1190px;
        height: 914px;
        background: url(../assets/xpbk_min2.png) no-repeat;
        background-size:100%;
        margin: 0 auto;        
    }
}
</style> 
