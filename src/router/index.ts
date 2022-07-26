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
    component: () => import(`@/views/${name}.vue`),
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
