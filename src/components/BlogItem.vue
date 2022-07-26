<template>
  <div class="py-2">
    <h3 v-html="item.meta.title" />
    <div class="border rounded py-1 mb-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link disabled text-light">Tags</a>
        </li>
        <li
          v-for="(tag, index) in item.meta.tags"
          class="nav-item mx-1"
          :key="index"
        >
          <a class="nav-link bg-light text-dark rounded-3">{{ tag }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-light">Date</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-light">{{ context.d(item.date) }}</a>
        </li>
      </ul>
    </div>
    <div v-html="item.content" />
  </div>
</template>

<script lang="ts">
  import { setup, Options, Vue } from 'vue-class-component'

  import { useI18n } from 'vue-i18n'

  @Options({
    props: {
      item: {},
    },
  })
  export default class BlogItem extends Vue {
    context = setup(() => {
      const { d } = useI18n()
      return { d }
    })

    mounted() {
      console.log(this)
    }
  }
</script>
