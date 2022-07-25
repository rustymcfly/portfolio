<template>
  <BlogItem v-for="(item, key) in $store.getters.blogItems" :key="key" :item="item" />
  <div class="btn-group d-flex">
    <button class="btn" @click="prev" v-t="'common.prev'" />
    <button class="btn" @click="next" v-t="'common.next'" />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
