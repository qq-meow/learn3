<template>
    <div class="index-box">
        <div class="input">
            <group>
                <x-input title="用户名" placeholder="请输入用户名" v-model="name"></x-input>
            </group>
            <group>
                <x-input title="邮箱" placeholder="请输入邮箱" v-model="email"></x-input>
            </group>
            <group>
                <x-input type="password" title="密码" placeholder="请输入密码" v-model="passwd"></x-input>
            </group>
        </div>
        <div class="button">
            <x-button @click.native="registerFun" type="primary">注册</x-button>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
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
            name: 'zhangqi',
            email: 'zhagnqi@163.com',
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
            
        },
        registerFun () {
            // sessionStorage.setItem('testKey',{a:1});
            // console.log(sessionStorage.getItem('testKey'))
            // window.location.href="https://www.baidu.com"
            // return;
            var name = this.name
            var passwd = this.passwd
            var email = this.email
            utils.request({
                'type': 'post',
                'url': urls.register,
                'data': {
                    name: name,
                    passwd: passwd,
                    email: email
                }
            }).then(res => {
                console.log (res)
                utils.setStorage('token', res.data)
                let url = utils.getSession('url')
                if (url) {
                    window.location.replace(url)
                    utils.removeSession('url')
                }
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