import { Options, Vue } from 'vue-class-component'

@Options({
  components: { Blog: require('@/components/Blog/index.vue').default },
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
