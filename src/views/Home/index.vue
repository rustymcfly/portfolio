<template>
  <div>
    <div class="position-absolute d-flex justify-content-center p-5 flex-column h-100">
      <h3 v-t="'Home.greeting'" class="text-dancing" />
      <h1 v-t="`${$route.name}.headline`" />
    </div>
    <pre id="text" class="d-none"></pre>
    <div class="position-absolute enter-fade overflow-hidden opacity-50 margin-auto ps-5">
      <pre id="text-flow" class="overflow-hidden"></pre>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
