<template>
  <div class="dashboard-wrapper d-flex flex-column min-vh-100">

    <!-- Navbar superior — persiste en todas las vistas hijas -->
    <NavbarComponent :nombreUsuario="nombreUsuario" />

    <!-- Área central -->
    <div class="dashboard-body d-flex flex-grow-1">

      <!-- Sidebar lateral — persiste en todas las vistas hijas -->
      <SidebarComponent
        :categoriaActiva="categoriaActiva"
        @filtrar="onFiltrar"
      />

      <!-- Vistas hijas: HomeView, ProductView, ClientesView -->
      <main class="dashboard-main flex-grow-1 p-4">
        <router-view />
      </main>

    </div>

    <!-- Footer inferior -->
    <FooterComponent />

  </div>
</template>

<script>
import NavbarComponent  from '@/components/NavbarComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import FooterComponent  from '@/components/FooterComponent.vue'

export default {
  name: 'DashboardView',
  components: { NavbarComponent, SidebarComponent, FooterComponent },

  data() {
    return {
      // Leer nombre desde localStorage (guardado en el login)
      nombreUsuario:   localStorage.getItem('nombreUsuario') || 'Usuario',
      categoriaActiva: 'todos'
    }
  },

  methods: {
    /**
     * Recibe @filtrar del SidebarComponent.
     * Actualiza la categoría activa y navega a productos.
     */
    onFiltrar(categoria) {
      this.categoriaActiva = categoria
      this.$router.push({ path: '/dashboard/productos', query: { categoria } })
    }
  }
}
</script>