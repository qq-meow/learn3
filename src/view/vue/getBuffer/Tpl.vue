<template>
    <div >
        <div class="index-box" v-html="mydata"></div>
    </div>
</template>

<script>
    import controller from "./controller.js"
    export default controller
</script>

<style lang="less">
    html {
        font-size: 62.5%;/*10 ÷ 16 × 100% = 62.5%*/}
    @media screen and (min-width:375px) {
        html {
            font-size:73.24% !important;
        }
    }
    @media screen and (min-width:414px) {
        html { 
            font-size:73.24% !important;
        }
    }
    @media screen and (min-width:481px) {
        html {
            font-size:94% !important;
        }
    }
    @media screen and (min-width:561px) {
        html {
            font-size:109% !important;
        }
    }
    @media screen and (min-width:641px) {
        html {
            font-size:125% !important;
        }
    }
    /*---全局样式---*/
    * {
    box-sizing: border-box;
    }

    body {

        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
        line-height: 1.5;
        color: #425f74;
        background-color: #fff;
        font-size:1.3rem;
    }
    .index-box{
        width: 100%;
    }
    .pmp-box{ width:100%; margin-bottom:5rem}
    .pmp-list { width:100%; }
    .pmp-list dl {  width:100%; height:20rem; border-top:1rem solid #f3f3f3; border-bottom:1px solid #d8d8d8; text-align: left;}
    .pmp-list dl dt{ padding:1rem 5%; font-size:1.7rem; font-weight:bold;}
    .pmp-list dl dd{padding:0.3rem 5%; font-size:1rem; color:#7895a7;}
    .caozuo-btn { width:100%; height:5rem; padding-top:1rem; text-align:right; border-bottom:1px solid #d8d8d8; }
    .caozuo-btn button{ display:inline-block; padding: 0 1rem; height:3rem; background:#fff; border:1px solid #35a3ee; color:#35a3ee; border-radius:0.5rem; font-size:1.2rem; margin-right:1rem;}
    .caozuo-btn button.netsign{border:1px solid #87cd46; color:#87cd46; }
    .caozuo-btn button.netsign-no{border:1px solid #94a7b6; color:#94a7b6; }
    .caozuo-btn button.netsign-cancel{border:1px solid #fc5d40; color:#fc5d40;}
</style>