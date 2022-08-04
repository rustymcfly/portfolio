<template>
  <div>
    <div class="container">
      <h1>{{ $t(headline) }}</h1>
      <p>Hello World</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'

  @Options({
    computed: {
      headline: () => `About.headline`,
    },
  })
  export default class About extends Vue {}
</script>
