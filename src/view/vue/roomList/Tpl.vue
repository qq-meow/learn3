<template>
    <div class="room-box">
        <div class="create-box">
            <a href="javascript:;" class="create-icon" @click="createRoom">+</a>
        </div>
        <ul>
            <li v-for="item in roomList" :key="item.id" :id="item.id" >
                <div class="room-id" @click="goMessage(item)">{{item.roomName}}</div>
                <div class="room-close" @click="deleteRoom(item)">x</div>
            </li>
        </ul>
        <div v-transfer-dom>
            <x-dialog v-model="showCreate" class="dialog-demo">
                <div class="input-box">
                    <group>
                        <x-input title="房间名称" placeholder="请输入房间名称" v-model="roomName"></x-input>
                    </group>
                </div>
                <div style="padding:15px;">
                    <x-button @click.native="postCreate" type="primary">提交</x-button>
                </div>
                <div @click="showCreate=false">
                    <span class="vux-close"></span>
                </div>
            </x-dialog>
        </div>
    </div>
    
</template>

<script>
import { XInput, Group, XButton, Cell, XDialog, TransferDomDirective as TransferDom } from 'vux'
import utils from '@/utils/utils.js'
import urls from '@/utils/urls.js'
import login from '@/utils/login.js'
export default {
    directives: {
        TransferDom
    },
    components: {
        XInput,
        XButton,
        Group,
        Cell,
        XDialog
    },
    props: {
    },
    data () {
        return {
            roomList: [
            ],
            showCreate: false,
            roomName: ''
        }
    },
    created () {
        let namePre = this.$store.state.name
        console.log(namePre, '重新设置name值之前')
        // this.getRoomList()
        login.checkLogin().then((res) => {
            console.log (res, '****')
            if (res.data.isLogin) {
                this.getRoomList()
            }
        })
    },
    methods: {
        getRoomList () {
            console.log(urls.friendList)
            utils.request({
                'type': 'get',
                'url': urls.getRoomList,
                'data': {
                }
            }).then(res => {
                console.log (res)
                this.roomList = res.data.roomList
                //console.log(utils.getStorage('token'))
            })
        },
        deleteRoom (e) {
            utils.request({
                'type': 'post',
                'url': urls.deleteRoom,
                'data': {
                    roomId: e.id
                }
            }).then(res => {
                console.log (res)
                if (res.data.result === 1) {
                    this.$vux.toast.show({
                        text: '删除成功',
                        type: 'text'
                    })
                    this.getRoomList()
                }
                //console.log(utils.getStorage('token'))
            })
        },
        createRoom () {
            this.showCreate = true
        },
        postCreate () {
            utils.request({
                'type': 'post',
                'url': urls.createRoom,
                'data': {
                    roomName: this.roomName
                }
            }).then(res => {
                console.log (res)
                this.getRoomList()
                this.showCreate = false
                //console.log(utils.getStorage('token'))
            })
        },
        goMessage (e) {
            let roomId = e.id
            window.location.href= "/message?roomId=" + roomId
        }
    }
}
</script>

<style lang="less">
    .room-box{
        width: 100%;
        box-sizing: border-box;
        .create-box{
            height: 50px;
            position: relative;
            a{
                display: block;
                position: absolute;
                right:0px;
                top: 10px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                text-decoration: none;
                border: 1px solid #ddd;
                border-radius: 2px;
            } 
        }
        ul {
            width: 100%;
            padding: 0px;
            li {
                line-height: 30px;
                height: 30px;
                list-style: none;
                padding: 0 10px;
                text-align: left;
                display: flex;
                .room-id {
                    flex: 1;
                }
                .room-close{
                    width: 30px;
                    text-align: center;
                    line-height: 30px;
                    height: 30px;
                }
            }
        }
    }
</style>