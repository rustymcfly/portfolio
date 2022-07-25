import { Options, Vue } from 'vue-class-component'

@Options({
  components: { Blog: require('@/components/Blog/index.vue').default },
})
export default class Portfolio extends Vue {}
