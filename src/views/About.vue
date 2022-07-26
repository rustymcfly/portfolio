<template>
  <div class="container">
    <h1 v-t="`${$route.name}.headline`" />
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'

  export default class About extends Vue {}
</script>
