<template>
  <div class="py-2">
    <h3 v-html="item.meta.title" />
    <div class="border rounded py-1 mb-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a class="nav-link disabled text-light">Tags</a></li>
        <li v-for="tag in item.meta.tags" class="nav-item mx-1">
          <a class="nav-link bg-light text-dark rounded-3">{{ tag }}</a>
        </li>
        <li class="nav-item"><a class="nav-link disabled text-light">Date</a></li>
        <li class="nav-item">
          <a class="nav-link disabled text-light">{{ context.d(item.date) }}</a>
        </li>
      </ul>
    </div>
    <div v-html="item.content" />
  </div>
</template>

<script lang="ts" src="./script.ts" />
