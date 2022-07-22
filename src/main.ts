import '@babel/polyfill'
import 'mutationobserver-shim'
import {createApp} from 'vue'
import App from './App.vue'
import i18n from './i18n'
import store from './store'
import router from './router'
import "@/assets/style/root.scss"

createApp(App).use(router).use(store).use(i18n).mount('#app')

