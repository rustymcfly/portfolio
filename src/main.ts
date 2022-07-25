import { createApp } from 'vue'
import './assets/style/root.scss'
import i18n from './i18n'
import { store, key } from './store'
import router from './router'

router.beforeEach(() => {
  store.commit('hideNavbar')
})

const Layout = require('@/views/Layout/index.vue').default

createApp(Layout).use(i18n).use(store, key).use(router).mount('#layout')
