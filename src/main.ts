import { createApp } from 'vue'
import './assets/style/root.scss'
import { key, store } from './store'
import router from './router'
import Layout from '@/views/Layout.vue'
import 'simplebar'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'de',
  globalInjection: true,
  messages,
})

import.meta.hot

router.beforeEach(() => {
  store.commit('hideNavbar')
})

export default (() => {
  return createApp(Layout)
    .use(store, key)
    .use(router)
    .use(i18n)
    .mount('#Layout')
})()
