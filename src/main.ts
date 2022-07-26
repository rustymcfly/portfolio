import { createApp } from 'vue'
import './assets/style/root.scss'
import i18n from './i18n'
import { store, key } from './store'
import router from './router'
import Layout from '@/views/Layout.vue'
import 'simplebar'
import.meta.hot

router.beforeEach(() => {
  store.commit('hideNavbar')
})
//
// router.afterEach(() => {
//   document.querySelector('data-')
// })

createApp(Layout).use(i18n).use(store, key).use(router).mount('#Layout')
