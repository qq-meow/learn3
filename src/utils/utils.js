// const axios = require('axios')
// const vue = require('vue')
// const request = function (options) {
//     return new Promise ((resolve,reject) => {
//         axios({
//             method: options.type,
//             url: options.url,
//             responseType: options.responseType ? options.responseType : 'json',
//             data: options.data
//         }).then(res => {
//             console.log(res, 'Promise里的res')
//             let code = res.data.meta.code
//             switch (code) {
//                 case 0:
//                     resolve(res.data)
//                     break;
//                 case 1:
//                     vue.$vux.toast.show({
//                         text: res.meta.msg,
//                         type: 'text'
//                     })
//                     break;
//                 default:
//                     break;
//             }
//         })
//     })
// }
// const setStorage = (key, val) => {
//     localStorage.setItem(key, JSON.stringify(val))
// }
// const getStorage = (key) => {
//     console.log(localStorage.getItem(key), 1111)
//     return JSON.parse(localStorage.getItem(key))
//   }
// module.exports = {
//     setStorage: setStorage,
//     getStorage: getStorage,
//     request: request
// }
import axios from 'axios'
import vue from 'vue'
export default {
    request (options) {
        let token = this.getStorage('token') ? this.getStorage('token').token : null
        // console.log(token, 123123123)
        return new Promise ((resolve,reject) => {
            // console.log(options, 111111111111)
            axios({
                method: options.type,
                url: options.url,
                data: options.data,
                headers: {
                    'token': token
                },
                responseType: options.responseType ? options.responseType : 'json',
            }).then(res => {
                // console.log(res, 'Promise里的res')
                let code = res.data.meta.code
                let msg = res.data.meta.msg
                switch (code) {
                    case 0:
                        resolve(res.data)
                        break;
                    case 1:
                        vue.$vux.toast.show({
                            text: msg,
                            type: 'text',
                            width: 'auto'
                        })
                        break;
                    case 2:
                        window.location.replace('/login')
                        break;
                    default:
                        break;
                }
            })
        })
    },
    setStorage (key, val) {
        localStorage.setItem(key, JSON.stringify(val))
    },
    getStorage (key) {
        // console.log(localStorage.getItem(key), 1111)
        return JSON.parse(localStorage.getItem(key))
    },
    removeStorage (key) {
        sessionStorage.removeItem(key)
    },
    setSession (key, val) {
        sessionStorage.setItem(key, JSON.stringify(val))
    },
    getSession (key) {
        // console.log(sessionStorage.getItem(key), 1111)
        return JSON.parse(sessionStorage.getItem(key))
    },
    removeSession (key) {
        sessionStorage.removeItem(key)
    },
    throttle (fn, gapTime) {
        if (gapTime == null || gapTime == undefined) {
            gapTime = 2000
        }
        
        let _lastTime = null
        return function () {
            let _nowTime = + new Date()
            
            if (_nowTime - _lastTime > gapTime || !_lastTime) {
                fn.apply(this, arguments)
                _lastTime = _nowTime
            }
        }
    }
}