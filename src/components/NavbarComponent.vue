<template>
  <nav class="navbar navbar-expand-lg navbar-dark salmendra-navbar sticky-top">
    <div class="container-fluid px-3">

      <!-- Brand: logo y nombre -->
      <router-link class="navbar-brand d-flex align-items-center gap-2" to="/dashboard">
        <i class="bi bi-bag-heart-fill navbar-brand-icon"></i>
        <span class="navbar-brand-name">SalMendra</span>
        <span class="badge brand-type-badge d-none d-sm-inline">Salsamentería</span>
      </router-link>

      <!-- Toggler móvil Bootstrap -->
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navegación"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links colapsables -->
      <div class="collapse navbar-collapse" id="navbarContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">
              <i class="bi bi-speedometer2 me-1"></i>Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/productos">
              <i class="bi bi-box-seam me-1"></i>Productos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/clientes">
              <i class="bi bi-people me-1"></i>Clientes
            </router-link>
          </li>
        </ul>

        <!-- Saludo al usuario + botón cerrar sesión -->
        <div class="d-flex align-items-center gap-3">
          <span class="navbar-text bienvenida-text d-none d-lg-inline">
            <i class="bi bi-person-circle me-1"></i>
            Hola, <strong>{{ nombreUsuario }}</strong>
          </span>
          <div class="vr bg-light opacity-25 d-none d-lg-block" style="height:24px"></div>
          <button class="btn btn-logout btn-sm d-flex align-items-center gap-1" @click="cerrarSesion">
            <i class="bi bi-box-arrow-right"></i>
            <span class="d-none d-sm-inline">Salir</span>
          </button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',

  props: {
    nombreUsuario: {
      type: String,
      default: 'Usuario'
    }
  },

  methods: {
    cerrarSesion() {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('usuarioActual')
      localStorage.removeItem('nombreUsuario')
      localStorage.removeItem('rolUsuario')
      this.$router.push('/login')
    }
  }
}
</script>