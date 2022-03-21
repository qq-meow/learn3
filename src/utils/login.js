
import utils from '@/utils/utils'
import urls from '@/utils/urls.js'
// import vue from 'vue'
export default {
    checkLogin () {
        return new Promise ((resolve, reject) => {
            utils.request({
                'type': 'get',
                'url': urls.checkLogin,
                'data': {
                }
            }).then(res => {
                if (res.meta.code == 0) {
                    if (res.data.isLogin) {
                        utils.setStorage('author', res.data.name)
                        resolve(res)
                    } else if(res.data.isRegister) {
                        utils.setSession('url', window.location.href)
                        window.location.replace('/login')
                    } else if(!res.data.isRegister) {
                        utils.setSession('url', window.location.href)
                        window.location.replace('/register')
                    }
                }
            })
        })
    }
}