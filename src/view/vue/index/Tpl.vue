<template>
    <div class="index-box">
        <div class="input">
            <group>
                <x-input title="appid" placeholder="请输入appid" v-model="appidValue"></x-input>
            </group>
            <group>
                <x-input title="secret" placeholder="请输入secret" v-model="secretValue"></x-input>
            </group>
            <group>
                <x-input title="page" placeholder="请输入page" v-model="pageValue"></x-input>
            </group>
        </div>
        <div class="button">
            <x-button @click.native="getQscode" type="primary">提交</x-button>
        </div>
        <div class="image-box">
            <img :src="imgSrc" alt="">
        </div>
        <HelloWorld @getData='getData' @getData1='getData1'></HelloWorld>
    </div>
</template>

<script>
    import controller from "./controller.js"
    export default controller
</script>

<style lang="less">
    .index-box{
        width: 100%;
    }
</style>