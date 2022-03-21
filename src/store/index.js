import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import landPage from './landPage.js'

const store = new Vuex.Store({
    modules: {
        landPage: landPage
    }
})
export default store