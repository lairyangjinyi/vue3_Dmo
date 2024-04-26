import 'element-plus/dist/index.css';
import '@/style/theme/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';
// import '@/style/index.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// @ts-ignore
import App from './App.vue';
import router from './router';


import * as ElementPlusIconsVue from '@element-plus/icons-vue';
//store持久本地化插件
import storeSetLocalStorage from 'pinia-plugin-persistedstate';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const store = createPinia();

store.use(storeSetLocalStorage);
app.use(store);
app.use(router);

app.mount('#app')
