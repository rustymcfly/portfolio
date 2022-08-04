<template>
  <div>
    <div class="container">
      <h1>{{ $t(`${$route.name}.headline`) }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'

  export default class Imprint extends Vue {}
</script>
