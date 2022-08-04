<template>
  <div>
    <div class="container">
      <h1>{{ $t(`${$route.name}.headline`) }}</h1>
      <p>{{ $t('Portfolio.agenda') }}</p>
      <div data-simplebar>
        <Blog :resource-type="$route.name" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import Blog from '@/components/Blog.vue'

  @Options({
    components: { Blog },
  })
  export default class Portfolio extends Vue {}
</script>
