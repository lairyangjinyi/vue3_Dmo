import 'element-plus/dist/index.css';
import '@/style/theme/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';
// import '@/style/index.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// @ts-ignore
import App from './App.vue';
import router from './router';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia());
app.use(router);

app.mount('#app')
