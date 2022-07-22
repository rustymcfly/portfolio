<template>
    <nav class="navbar navbar-expand-lg position-fixed w-100 top-0 navbar-dark">
      <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button :aria-expanded="collapsed" aria-controls="navbar" aria-label="Toggle navigation" class="navbar-toggler"
        data-target="#navbar" data-toggle="collapse" type="button" @click="collased = !collapsed">
        <span class="navbar-toggler-icon">asd</span>
      </button>


      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    <router-view v-slot="{Component}">

      <transition name="slide-fade">
        <div :data-page="$route.name" class="background">
        <div class="container">
          <transition name="slide-fade">
          <component :is="Component"/>
          </transition>
        </div>
        </div>
      </transition>
    </router-view>
</template>
<script lang="ts" >
import {defineComponent} from "vue";
import {Collapse} from "bootstrap"

export default defineComponent({
  computed: {
    collapsed: {
      get (): boolean {
        return this.$store.state.navbarCollapsed
      },
      set (value) {
        const instance = Collapse.getInstance('nav .collapse')
        if(instance)
          instance[value ? 'show': 'hide'].call(instance)
        this.$store.state.navbarCollapsed = value
      }
    },
  },
  mounted () {
    new Collapse('nav .collapse', {
      toggle: false
    })
  }
})
</script>
