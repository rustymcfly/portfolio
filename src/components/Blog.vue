<template>
  <BlogItem
    v-for="(item, key) in $store.getters.blogItems"
    :key="key"
    :item="item"
  />
  <div class="btn-group d-flex">
    <button class="btn" @click="prev" v-t="'common.prev'" />
    <button class="btn" @click="next" v-t="'common.next'" />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import BlogItem from '@/components/BlogItem.vue'
  @Options({
    props: {
      resourceType: {
        type: String,
        default: '@/assets/blogs',
      },
    },
    components: { BlogItem },
    name: 'BlogComponent',
  })
  export default class Blog extends Vue {
    private resourceType: string
    created() {
      this.$store.state.blog.items.source = this.resourceType
    }
    mounted() {
      this.$store.state.blog.items.load()
    }

    next() {
      this.$store.commit('nextBlogPage')
    }
    prev() {
      this.$store.commit('prevBlogPage')
    }
  }
</script>
