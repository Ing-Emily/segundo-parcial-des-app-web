<script>

export default {
  computed: {
    usuario(){
      return localStorage.getItem('usuario')
    }
  },

  methods: {
    cerrarSesion(){
      localStorage.removeItem('usuario')
      this.$router.push('/login')
    }
  }
}
</script>
<template>

<header class="topbar">
  <div class="brand">
    <i class="bi bi-shop"></i>
    <div>
      <h2>SalMendra</h2>
      <small>Sistema de gestión</small>
    </div>
  </div>

  <div class="topbar-right">
    <span class="user-badge">
      <i class="bi bi-person-circle"></i>
      {{ usuario }}
    </span>
    <button
      class="logout-btn"
      @click="cerrarSesion"
    >
      <i class="bi bi-box-arrow-right"></i>
      Cerrar sesión
    </button>
  </div>

</header>
</template>