<template>
    <div class="index-box">
        <div class="input">
            <group>
                <x-input title="利率" placeholder="请输入利率" v-model="lilv"></x-input>
            </group>
            <group>
                <x-input title="本金" placeholder="请输入本金" v-model="money"></x-input>
            </group>
            <group>
                <x-input title="年限" placeholder="请输入年限" v-model="years"></x-input>
            </group>
            <group>
                <x-input title="月期" placeholder="请输入月期" v-model="month"></x-input>
            </group>
            <group>
                <x-input title="总金额" v-model="moneyall"></x-input>
            </group>
        </div>
        <div>
            <div>结果是:</div>
            <div>{{result}}</div>
        </div>
        <div class="button">
            <x-button @click.native="getQscode" type="primary">提交</x-button>
        </div>
        <div class="image-box">
            <img :src="imgSrc" alt="">
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
            result: ''
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
            // axios.get('http://192.168.1.4:3000/getBuffer').then(res => {
            //     console.log (res, 333)
            // })
        },
        getQscode() {
            let self = this


            /**获取name的值的方法 (重新设置name值之前)*/
            let namePre = this.$store.state.name
            console.log(namePre, '重新设置name值之前')
            /**设置key为name的值的方法 */
            this.$store.commit('increment', '张三')
            /**获取name的值的方法 */
            let nameNex = this.$store.state.name
            console.log(nameNex, '重新设置name值之后')


            utils.request({
                'type': 'get',
                'url': urls.getPhone,
                'data': {
                }
            }).then(res => {
                console.log(res,1111)
            })
            this.curMoney = Number(this.money)
            let moneyall = this.moneyall
            let month = Number(this.month)
            let forCount = month > 0 ? this.years * 12 / this.month : this.years
            console.log (forCount)
            for (let i = 0; i < forCount; i++) {
                if (month <= 0) {
                    let lixi = this.lilv / 100 * this.curMoney
                    let money = this.curMoney + lixi
                    this.curMoney = money
                    this.moneyall = money.toFixed(2)
                    if (i >= forCount - 1) {
                        console.log (this.curMoney.toFixed(2))
                    }
                } else {
                    let lixi = ((this.lilv / 100 * this.curMoney) / 365 ) * (month * 30)
                    let money = this.curMoney + lixi
                    this.curMoney = money
                    this.moneyall = money.toFixed(2)
                    if (i >= forCount - 1) {
                        console.log (this.curMoney.toFixed(2))
                    }
                }
            }
        }
    }
}
</script>

<style lang="less">
    .index-box{
        width: 100%;
    }
</style>