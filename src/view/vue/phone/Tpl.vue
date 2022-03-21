<template>
    <div class="index-box">
        <div class="image-box" >
            <img :src="imgSrc" alt="" @touchstart="mouseDownFunc" @touchmove="mouseMoveFunc"  @touchend="mouseupFunc">
        </div>
        <div class="button-box">
            <button @click="openPhone">电源</button>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
import axios from 'axios'
import utils from '@/utils/utils.js'
import urls from '@/utils/urls.js'
export default {
    components: {
        XInput,
        XButton,
        Group,
        Cell
    },
    props: {
    },
    data () {
        return {
            lilv: 4.2,
            money: 100000,
            curMoney: 0,
            years: 30,
            imgSrc: '',
            moneyall: 0,
            month: 0,
            result: '',
            mouseDown: false,
            pageX: 0,
            pageY: 0
        }
    },
    created () {
        this.init()
    },
    mounted () {
        /**这里运行初始化的函数 */
    },
    methods: {
        init () {
            let self = this
            console.log(urls.wssTest)
            let ws = new WebSocket(urls.wssTest);
            console.log(ws)
            this.ws = ws
            // 打开WebSocket连接后立刻发送一条消息:
            this.ws.onopen = (res) => {
                console.log('onopen', res)
                this.sendFunc()
            }
            this.ws.onmessage = (msg) => {
                let message = JSON.parse(msg.data)
                // console.log(message, '*****************')
                this.imgSrc = message.img
            }
        },
        mouseDownFunc (e) {
            this.mouseDown = true
            this.pageX = e.targetTouches[0].pageX
            this.pageY = e.targetTouches[0].pageY
        },
        mouseMoveFunc:utils.throttle(function (e) {
            let self = this
            if (!self.mouseDown) {
                return
            }
            console.log(e, '*********222222222********')
            let pageX = e.changedTouches[0].pageX
            let pageY = e.changedTouches[0].pageY
            let data = {
                type: 'swipe',
                pagexy: {
                    pagexPre: self.pageX,
                    pageyPre: self.pageY,
                    pagexCur: pageX,
                    pageyCur: pageY
                }
            }
            this.sendFunc(data)
            this.pageX = e.changedTouches[0].pageX
            this.pageY = e.changedTouches[0].pageY
        }, 0),
        mouseupFunc (e) {
            this.mouseDown = false
            let pageX = e.changedTouches[0].pageX
            let pageY = e.changedTouches[0].pageY
            console.log(e, 43434343)
            if (this.pageX == pageX && this.pageY == pageY ) {
                let data = {
                    type: 'click',
                    pagexy: {
                        pagexCur: pageX,
                        pageyCur: pageY
                    }
                }
                this.sendFunc(data)
            }
        },
        getPhoneImg() {
            this.sendFunc()
        },
        openPhone () {
            let data = {
                type: 'open'
            }
            this.sendFunc(data)
        },
        sendFunc (data = {type: 'init'}) {
            this.ws.send(JSON.stringify(data))
        }
    }
}
</script>

<style lang="less">
    .index-box{
        width: 100%;
        .image-box{
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
</style>