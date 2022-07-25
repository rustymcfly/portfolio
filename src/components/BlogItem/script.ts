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
