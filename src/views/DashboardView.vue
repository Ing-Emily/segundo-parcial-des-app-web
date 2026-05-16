<script>

import HeaderComponent from '../components/HeaderComponent.vue'
import SidebarComponent from '../components/SidebarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {

  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  },
  methods:{
  logout(){
    localStorage.removeItem('usuario')
    this.$router.push('/login')
  }
}


}
</script>

<template>

<HeaderComponent />
<button @click="logout" class="btn btn-dark">
  Cerrar sesión
</button>
<div class="d-flex">

  <SidebarComponent />

  <div class="flex-grow-1 p-4">

    <router-view />

  </div>

</div>

<FooterComponent />

</template>