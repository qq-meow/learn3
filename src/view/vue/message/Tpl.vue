<template>
    <div class="index-box">
        <div class="message-box">
            <ul ref="qwcontent">
                <li :class="item.author == author ? 'txt-left' : 'txt-right'" :id="index" v-for="(item,index) in message" :key="index"><p>{{item.msg}}</p><font >{{item.author}}</font></li>
            </ul>
        </div>
        <div class="input">
            <group>
                <x-textarea :max="200" v-model='msg' placeholder="请输入内容"></x-textarea>
            </group>
        </div>
        <div class="button">
            <x-button @click.native="sendMsg" type="primary">提交</x-button>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell, XTextarea } from 'vux'
import axios from 'axios'
import { setTimeout } from 'timers';
import utils from '@/utils/utils.js'
import urls from '@/utils/urls.js'
import login from '@/utils/login.js'
export default {
    components: {
        XInput,
        XButton,
        Group,
        Cell,
        XTextarea
    },
    props: {
    },
    data () {
        return {
            message: [],
            ws: {},
            msg: '',
            author: '',
            roomId: '',
            teststr:0,
            teststrNew:0
        }
    },
    created () {
        login.checkLogin().then((res) => {
            console.log (res, '****')
            if (res.data.isLogin) {
                this.init()
            }
        })
    },
    methods: {
        init () {
            this.author = utils.getStorage('author')
            this.roomId = this.$route.query.roomId ? this.$route.query.roomId : null
            //sss
            let dataaa = [
                this.author,
                this.roomId
            ]
            let ws = new WebSocket(urls.wssTest, dataaa);console.log(ws)
            this.ws = ws
            // 打开WebSocket连接后立刻发送一条消息:
            this.ws.onopen = (res) => {
                console.log('onopen', res)
                // this.ws.send(JSON.stringify({author: this.author}))
                // this.sendMsg()
            }
            this.ws.onmessage = (msg) => {
                let message = JSON.parse(msg.data)
                console.log(message)
                if (message.meta.code == 0) {
                    this.message.push(message.data)
                    this.setScroll()
                } else {
                    this.$vux.toast.show({
                        text: message.meta.msg,
                        type: 'text'
                    })
                }
            }
        },
        changeFun () {
            this.teststr = 223
        },
        sendMsg() {
            let data = {
                msg: this.msg,
                roomId: this.roomId
            }
            this.ws.send(JSON.stringify(data))
            this.msg = ''
        },
        setScroll () {
            this.$nextTick(() => {
                let clientHeight = this.$refs.qwcontent.clientHeight
                let scrollHeight = this.$refs.qwcontent.scrollHeight
                // console.log(scrollHeight - clientHeight, '-------', this.$refs.qwcontent.scrollTop)
                this.$refs.qwcontent.scrollTop = scrollHeight - clientHeight
                // console.log(this.$refs.qwcontent.scrollTop)
            })
        }
    }
}
</script>

<style lang="less">
    body{
        margin: 0;
        box-sizing: border-box;
    }
    div, ul, li, p{
        box-sizing: border-box;
    }
    .index-box{
        width: 100%;
        .input{
            padding: 10px;
        }
        .button{
            padding: 10px;
        }
    }
    .message-box{
        width: 100%;
        height: 300px;
        padding: 10px;
        ul{
            width: 100%;
            height: 300px;
            overflow-y: scroll;
            margin: 0;
            padding: 0;
            border: 1px solid #ddd;
            box-sizing: border-box;
            li{
                line-height: 30px;
                width: 100%;
                list-style: none;
                word-break: break-all;
                padding: 0 10px;
                box-sizing: border-box;
                p{
                    margin:0px;
                }
                font{
                    color: burlywood;
                    display: block;
                    font-size: 12px;
                    line-height: 14px;
                }
                &.txt-left{
                    text-align: left;
                    font{
                        text-align: left;
                    }
                }
                &.txt-right{
                    text-align: right;
                    font{
                        text-align: right;
                    }
                }
            }
        }
    }
</style>