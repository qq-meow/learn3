import { XInput, Group, XButton, Cell } from 'vux'
import HelloWorld from '@/components/HelloWorld.vue'
import utils from '@/utils/utils.js'
import urls from '@/utils/urls.js'
export default {
    components: {
        XInput,
        XButton,
        Group,
        Cell,
        HelloWorld
    },
    data () {
        return {
            appidValue: '',
            secretValue: '',
            pageValue: 'pages/server/server',
            imgSrc: '',
            mydata: ''
        }
    },
    created () {
        // ws.onsend('Hello!');
        // ws.on('open', function () {
        //     console.log(`[CLIENT] open()`);
        //     ws.send('Hello!');
        // });

        // 响应收到的消息:
        // ws.on('message', function (message) {
        //     console.log(`[CLIENT] Received: ${message}`);
        // })
        this.netbaoming()
    },
    methods: {
        dingshi () {
            let interval = (Math.floor(Math.random()*10 + 5)) * 9868
            console.log(interval)
            setTimeout(() => {
                this.netbaoming()
            }, interval);
        },
        netbaoming () {
            let cookie = document.cookie
            console.log(cookie, 1111111)
            utils.request({
                'type': 'post',
                'url': urls.getBuffer,
                'data': {
                    cookie: cookie
                }
            }).then(res => {
                console.log (res.data)
                // self.imgSrc = res.data.data.src
                document.cookie = res.data.Cookies
                this.mydata = res.data.html
                this.dingshi()
                if (res.data.isBao) {
                    alert('成功了')
                }
            })
        },
        getQscode() {
            let self = this
            utils.request({
                'type': 'post',
                'url': urls.getToken,
                'data': {
                    appid: this.appidValue,
                    secret: this.secretValue,
                    page: this.pageValue
                }
            }).then(res => {
                console.log (res)
                self.imgSrc = res.data.data.src
            })
        },
        getData (e) {
            console.log(e, '111111')
        },
        getData1 (e) {
            console.log(e, '222222')
            
        }
    }
}