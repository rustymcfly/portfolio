declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >
  export default component
}

import { store } from '@/store'

declare module '@vue/runtime-core' {
  // noinspection JSUnusedGlobalSymbols
  interface ComponentCustomProperties {
    $store: store
  }
}
declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.txt'
declare module '*.jpg'
