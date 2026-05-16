<script>

import HeaderComponent from '../components/HeaderComponent.vue'
import SidebarComponent from '../components/SidebarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {

  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  }

}

</script>

<template>

<HeaderComponent />

<div class="d-flex">

  <SidebarComponent />

  <div class="flex-grow-1 p-4">

    <router-view />

  </div>

</div>

<FooterComponent />

</template>