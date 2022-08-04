<template>
  <nav class="navbar navbar-expand-lg position-fixed vw-100 top-0 navbar-dark">
    <a class="navbar-brand text-dancing ps-1" href="#">Martin Flogaus</a>
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
            <a :href="href" class="nav-link">{{ $t(`pages.${route.name}`) }}</a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'scale-slide'">
      <component :key="route.name" :data-page="route.name" :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { Collapse } from 'bootstrap'
  import { State } from '@/store'

  @Options({
    data() {
      return {
        topLevelRoutes: ['/about', '/portfolio', '/blog', '/imprint'],
      }
    },
  })
  export default class Layout extends Vue {
    get collapsed(): boolean {
      return this.isCollapsed
    }

    set collapsed(value: boolean) {
      ;(this.$store.state.navbarCollapsed &&
        this.$store.commit('showNavbar')) ||
        this.$store.commit('hideNavbar')
      this.isCollapsed = value
    }

    private isCollapsed = true

    public toggle() {
      this.collapsed = !this.collapsed
    }

    private subscriber(mutation: { [p: string]: unknown }, state: State) {
      const instance = Collapse.getInstance('nav .collapse')
      instance &&
        instance[!state.navbarCollapsed ? 'show' : 'hide'].call(instance)
      this.isCollapsed !== state.navbarCollapsed &&
        (this.isCollapsed = state.navbarCollapsed)
    }

    mounted(): void {
      this.isCollapsed = this.$store.state.navbarCollapsed
      this.$store.subscribe(this.subscriber, { prepend: true })
      if (document.querySelector('nav .collapse')) {
        new Collapse('nav .collapse', {
          toggle: !this.isCollapsed,
        })
      }
    }
  }
</script>
<i18n src="@/locales/de.json" locale="de" />
