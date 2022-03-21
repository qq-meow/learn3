import utils from '@/utils/utils.js'
import urls from '@/utils/urls.js'
export default {
    components: {
    },
    data () {
        return {
            arry: [],
            name: ''
        }
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            let arry = this.arry
            for (let index = 0; index < 50; index++) {
                let num = Math.floor(Math.random() * 20) + 1
                arry.push(num)
            }
            this.arry = arry
            this.name = ''
        },
        msDown (e) {
            console.log(e, 22)
        }
    }
}