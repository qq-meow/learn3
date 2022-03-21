<template>
    <div class="game-box">
        <div class="kuang">
            <div class="column" v-for="(item, index) in arry" :key="index">
                <div class="txt" @mousedown="msDown">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import controller from "./controller.js"
    export default controller
</script>

<style lang="less">
    html,body{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .game-box{
        width: 100%;
        height: 100%;
        .kuang{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 15px;
            box-sizing: border-box;
            justify-content: center;
            position: relative;
            .column{
                width: 80px;
                height: 80px;
                padding: 5px;
                margin-bottom: 10px;
                .txt{
                    width: 70px;
                    height: 70px;
                    line-height: 70px;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 3px;
                }
            }
        }
    }
</style>