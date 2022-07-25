import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = Object.entries({
  Home: '/',
  About: '/about',
  Portfolio: '/portfolio',
  Blog: '/blog',
  Imprint: '/imprint',
}).map(([name, path]) => {
  return {
    path: path,
    name: name,
    component: require(`@/views/${name}/index.vue`).default,
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
