export default {
    state: {
        /**这里有一个初始的name 为空字符串*/
        name: '2222',
        age: 20
    },
    mutations: {
        edit (state, value) {
            /**设置name的值为新值 */
            console.log(state, value, 44444)
            state.name = value
        }
    },
    actions: {
        aedit (ctx, data) {
            console.log(data, 999)
            ctx.commit('edit', 6666)
        }
    }
}