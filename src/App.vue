<template>
  <nav class="navbar navbar-expand-lg position-fixed w-100 top-0 navbar-dark">
    <a
      class="navbar-brand text-dancing"
      href="#"
      >Martin Flogaus</a
    >
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
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/"
            >Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/about"
            >About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <div
        :data-page="$route.name"
        class="background"
      >
        <div class="container">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </div>
      </div>
    </transition>
  </router-view>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import { Collapse } from 'bootstrap';

export default class App extends Vue {
  get collapsed(): boolean {
    return this.$store.state.navbarCollapsed;
  }

  set collapsed(value: boolean) {
    const instance = Collapse.getInstance('nav .collapse');
    if (instance) instance[value ? 'show' : 'hide'].call(instance);
    this.$store.state.navbarCollapsed = value;
  }

  public toggle() {
    this.collapsed = !this.collapsed;
  }

  mounted(): void {
    new Collapse('nav .collapse', {
      toggle: false,
    });
  }
}
</script>
