<template>
  <div class="container">
    <h1 v-t="`${$route.name}.headline`" />
    <p v-t="'Portfolio.agenda'" />
    <Blog :resource-type="$route.name" />
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
