<template>
  <div>
    <div class="container">
      <h1>{{ $t(`${$route.name}.headline`) }}</h1>
      <div data-simplebar>
        <BlogComponent :resource-type="$route.name" />
      </div>
    </div>
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
