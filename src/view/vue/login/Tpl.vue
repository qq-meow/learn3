<template>
    <div class="index-box">
        <div class="input">
            <group>
                <x-input title="用户名" placeholder="请输入用户名" v-model="name"></x-input>
            </group>
            <group>
                <x-input title="密码" placeholder="请输入密码" v-model="passwd"></x-input>
            </group>
        </div>
        <div class="button">
            <x-button @click.native="loginFun" type="primary">登录</x-button>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
import utils from '@/utils/utils.js'
import urls from '@/utils/urls.js'
// import axios from 'axios'
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
            name: 'zhangqi',
            email: '',
            passwd: '123456'
        }
    },
    created () {
        this.init()
    },
    beforeDestroy () {
        utils.removeStorage('url')
    },
    methods: {
        init () {
            //
        },
        loginFun () {
            var name = this.name
            var passwd = this.passwd
            utils.request({
                'type': 'post',
                'url': urls.login,
                'data': {
                    name: name,
                    passwd: passwd
                }
            }).then(res => {
                console.log (res)
                utils.setStorage('token', res.data)
                let url = utils.getSession('url')
                if (url) {
                    window.location.replace(url)
                    utils.removeSession('url')
                }
                //console.log(utils.getStorage('token'))
            })
        }
    }
}
</script>

<style lang="less">
    .index-box{
        width: 100%;
    }
</style>