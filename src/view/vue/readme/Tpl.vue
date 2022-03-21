<template>
    <div class="index-box">
        {{name}}
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import utils from '@/utils/utils.js'
import urls from '@/utils/urls.js'
export default {
    components: {
    },
    props: {
    },
    data () {
        return {
        }
    },
    computed: {
        ...mapState({
            name: state => state.landPage.name
        })
    },
    created () {
        console.log(this.$store.state.landPage, 2222)
        this.init()
    },
    beforeDestroy () {
    },
    methods: {
        ...mapActions([
            'aedit'
        ]),
        init () {
            setTimeout(() => {
                // this.$store.commit('edit', 1111)
                // this.$store.dispatch('aedit', {a: 1})
                this.aedit()
                console.log(this.name, 3333)
            }, 2000)
        }
    }
}
</script>

<style lang="less">
    .index-box{
        width: 100%;
    }
</style>