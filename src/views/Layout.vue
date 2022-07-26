<template>
  <nav
    class="navbar navbar-expand-lg position-fixed vw-100 top-0 navbar-dark bg-dark"
  >
    <a class="navbar-brand text-dancing" href="#">Martin Flogaus</a>
    <button
      :aria-expanded="collapsed"
      aria-controls="navbar"
      aria-label="Toggle navigation"
      class="navbar-toggler"
      data-target="#navbar"
      data-toggle="collapse"
      type="button"
      @click="toggle"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbar"
      class="collapse navbar-collapse border-0 border-lg-0 border-bottom border-light"
    >
      <ul class="navbar-nav mr-auto">
        <router-link
          v-for="(routeRecord, index) in topLevelRoutes"
          :key="index"
          v-slot="{ href, route, isActive }"
          :to="routeRecord"
        >
          <li :class="{ active: isActive }" class="nav-item text-center">
            <a v-t="`pages.${route.name}`" :href="href" class="nav-link"></a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
  <router-view v-slot="{ Component, route }">
    <div :data-page="$route.name" class="background" data-simplebar>
      <transition :name="route.meta.transitionName || 'slide'">
        <component :is="Component" :class="route.meta.transitionName" />
      </transition>
    </div>
  </router-view>
</template>

<script lang="ts">
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
      ;(this.$store.state.navbarCollapsed &&
        this.$store.commit('showNavbar')) ||
        this.$store.commit('hideNavbar')
      this._collapsed = value
    }

    private _collapsed = true

    public toggle() {
      this.collapsed = !this.collapsed
    }

    private subscriber(mutation: { [p: string]: unknown }, state: State) {
      const instance = Collapse.getInstance('nav .collapse')
      instance &&
        instance[!state.navbarCollapsed ? 'show' : 'hide'].call(instance)
      this._collapsed !== state.navbarCollapsed &&
        (this._collapsed = state.navbarCollapsed)
    }

    mounted(): void {
      this._collapsed = this.$store.state.navbarCollapsed
      try {
        this.$store.subscribe(this.subscriber, { prepend: true })
        new Collapse('nav .collapse', {
          toggle: !this._collapsed,
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>
