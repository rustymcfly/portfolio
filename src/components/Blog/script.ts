import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    resourceType: {
      type: String,
      default: '@/assets/blogs',
    },
  },
  components: { BlogItem: require('@/components/BlogItem/index.vue').default },
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
