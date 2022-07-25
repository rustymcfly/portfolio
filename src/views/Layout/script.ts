import { Options, Vue } from 'vue-class-component'
import { Collapse } from 'bootstrap'
import { State } from '@/store'
import { useI18n } from 'vue-i18n'

@Options({
  data() {
    return {
      topLevelRoutes: ['/about', '/portfolio', '/blog', '/imprint'],
    }
  },
})
export default class Layout extends Vue {
  setup() {
    const { t, d } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
    return { t, d }
  }

  get collapsed(): boolean {
    return this._collapsed
  }

  set collapsed(value: boolean) {
    ;(this.$store.state.navbarCollapsed && this.$store.commit('showNavbar')) || this.$store.commit('hideNavbar')
    this._collapsed = value
  }

  private _collapsed = true

  public toggle() {
    this.collapsed = !this.collapsed
  }

  private subscriber(mutation: { [p: string]: unknown }, state: State) {
    const instance = Collapse.getInstance('nav .collapse')
    instance && instance[!state.navbarCollapsed ? 'show' : 'hide'].call(instance)
    this._collapsed !== state.navbarCollapsed && (this._collapsed = state.navbarCollapsed)
  }

  mounted(): void {
    this._collapsed = this.$store.state.navbarCollapsed
    new Collapse('nav .collapse', {
      toggle: !this._collapsed,
    })
    this.$store.subscribe(this.subscriber, { prepend: true })
  }
}
