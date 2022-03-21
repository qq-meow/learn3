// let domain = 'http://192.168.1.4:3000'
let domain = 'http://localhost:3000'

export default {
    getRoomList: domain + '/getRoomList',
    deleteRoom: domain + '/deleteRoom',
    createRoom: domain + '/createRoom',
    getToken: domain + '/getToken',
    getBuffer: domain + '/getBuffer',
    login: domain + '/login',
    register: domain + '/register',
    friendList: domain + '/friendList',
    checkLogin: domain + '/checkLogin',
    getWord: domain + '/getWord',
    getPhone: domain + '/getPhone',
    touchMoveFunc: domain + '/touchMoveFunc',
    touchEndFunc: domain + '/touchEndFunc',
    /**---------------无敌分割线，下面是wss---------------- */
    wssTest: 'ws://localhost:3002/test'
}