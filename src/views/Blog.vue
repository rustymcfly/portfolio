<template>
  <div class="container">
    <h1 v-t="`${$route.name}.headline`" />
    <BlogComponent :resource-type="$route.name" />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import BlogComponent from '@/components/Blog.vue'

  @Options({
    components: { BlogComponent },
    name: 'BlogPage',
  })
  export default class Blog extends Vue {
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
