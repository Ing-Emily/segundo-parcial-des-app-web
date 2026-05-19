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

<div class="dashboard-wrapper">

  <HeaderComponent />

  <div class="dashboard-body d-flex">

    <SidebarComponent />

    <main class="dashboard-main flex-grow-1 p-4">

      <router-view />

    </main>

  </div>

  <FooterComponent />

</div>

</template>