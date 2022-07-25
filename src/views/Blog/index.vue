<template>
  <div class="container">
    <h1 v-t="`${$route.name}.headline`" />
    <Blog :resource-type="$route.name" />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
