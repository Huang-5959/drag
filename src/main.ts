import '@/styles/main.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

store.use(piniaPluginPersistedstate);

createApp(App).use(router).use(store).use(ElementPlus).mount('#app');
