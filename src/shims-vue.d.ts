import Store from '@/store';

declare module '*.vue' {
  import type { DefineComponent } from '@vue/runtime-core';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: typeof Store;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $store: typeof Store;
  }
}
