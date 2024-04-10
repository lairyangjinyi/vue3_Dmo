<!--
* @Author: yangli
* @createDate: 2024/4/3 17:52
* @description: 切换登录注册
-->
<script setup lang="ts">
import useStore from "@/stores/modules/sign";
import {onMounted, reactive, ref} from "vue";

const store = useStore();

onMounted(()=>{
    console.log('import.meta.env.BASE_URL',import.meta.env.BASE_URL)
    store.setSignIn();
})
const classShow = reactive({
    is_gx:false,
    is_txr:false,
    is_hidden:false
});
const disable = ref(false)

// 切换Switch
const changeTo = (val)=>{
    classShow.is_gx = true;
    setTimeout(function(){
        classShow.is_gx = false;
        disable.value = false;
    }, 1500);
    disable.value = true
    classShow.is_txr = !classShow.is_txr;
    classShow.is_hidden = !classShow.is_hidden;
    changeSign(val);
}

// 切换登录注册
const changeSign = (val) => {
    console.log(val)
    switch (val){
        case true:
            store.setSignUp();
            break;
        case false:
            store.setSignIn();
            break;
    }
}
</script>
<template>
    <div class="switch" id="switch-cnt" :class="{'is-gx':classShow.is_gx,'is-txr':classShow.is_txr}">
        <div class="switch__circle" :class="{'is-txr':classShow.is_txr}"></div>
        <div class="switch__circle switch__circle--t" :class="{'is-txr':classShow.is_txr}"></div>
        <div class="switch__container" id="switch-c1" :class="{'is-hidden':classShow.is_hidden}">
            <h2 class="switch__title title">欢迎回来!</h2>
            <p class="switch__description description">To keep connected with us please login with your personal info</p>
            <el-button type="primary" :disabled="disable" class="switch__button button switch-btn" @click="changeTo(true)">登录</el-button>
        </div>
        <div class="switch__container" id="switch-c2" :class="{'is-hidden':!classShow.is_hidden}">
            <h2 class="switch__title title">你好!</h2>
            <p class="switch__description description">Enter your personal details and start journey with us</p>
            <el-button type="primary" :disabled="disable" class="switch__button button switch-btn" @click="changeTo(false)">注册</el-button>
        </div>
    </div>
</template>

<style scoped>
@import '@/style/loginStyle/index.scss';
</style>