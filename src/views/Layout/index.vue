<template>
  <nav class="navbar navbar-expand-lg position-fixed vw-100 top-0 navbar-dark bg-dark">
    <a class="navbar-brand text-dancing" href="#">Martin Flogaus</a>
    <button :aria-expanded="collapsed" aria-controls="navbar" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbar" data-toggle="collapse" type="button" @click="toggle">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbar" class="collapse navbar-collapse border-0 border-lg-0 border-bottom border-light">
      <ul class="navbar-nav mr-auto">
        <router-link v-for="routeRecord in topLevelRoutes" v-slot="{ href, route, navigate, isActive, isExactActive }" :to="routeRecord">
          <li :class="{ active: isActive }" class="nav-item text-center">
            <a v-t="`pages.${route.name}`" :href="href" class="nav-link"></a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
  <router-view v-slot="{ Component, route }">
    <div :data-page="$route.name" class="background">
      <transition :name="route.meta.transitionName || 'slide'">
        <component :is="Component" :class="route.meta.transitionName" />
      </transition>
    </div>
  </router-view>
</template>

<script lang="ts" src="./script.ts"></script>
