import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import BlogItems from './BlogItems'

export interface State {
  navbarCollapsed: boolean
  blog: {
    items: BlogItems
    page: number
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    navbarCollapsed: true,
    blog: {
      items: new BlogItems(),
      page: 1,
    },
  },
  getters: {
    blogItems(state) {
      return state.blog.items.get()
    },
  },
  mutations: {
    nextBlogPage(state) {
      state.blog.page++
      state.blog.items.load(state.blog.page)
    },
    prevBlogPage(state) {
      state.blog.page--
      state.blog.items.load(state.blog.page)
    },
    hideNavbar(state) {
      state.navbarCollapsed = true
    },
    showNavbar(state) {
      state.navbarCollapsed = false
    },
  },
  actions: {},
  modules: {},
})
