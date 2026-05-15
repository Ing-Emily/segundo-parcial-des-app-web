<template>
  <aside class="sidebar-wrapper d-flex flex-column">

    <!-- SECCIÓN: Navegación principal -->
    <div class="sidebar-section">
      <p class="sidebar-section-title">
        <i class="bi bi-grid-fill me-2"></i>Menú
      </p>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="sidebar-link" to="/dashboard">
            <i class="bi bi-speedometer2 me-2"></i>Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="sidebar-link" to="/dashboard/productos">
            <i class="bi bi-box-seam me-2"></i>Productos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="sidebar-link" to="/dashboard/clientes">
            <i class="bi bi-people me-2"></i>Clientes
          </router-link>
        </li>
      </ul>
    </div>

    <hr class="sidebar-divider" />

    <!-- SECCIÓN: Categorías (emite @filtrar al padre) -->
    <div class="sidebar-section">
      <p class="sidebar-section-title">
        <i class="bi bi-funnel-fill me-2"></i>Categorías
      </p>
      <ul class="nav flex-column">
        <li class="nav-item">
          <button
            class="sidebar-link"
            :class="{ 'sidebar-link-active': categoriaActiva === 'todos' }"
            @click="$emit('filtrar', 'todos')"
          >
            <i class="bi bi-collection me-2"></i>Todos
          </button>
        </li>
        <li class="nav-item">
          <button
            class="sidebar-link"
            :class="{ 'sidebar-link-active': categoriaActiva === 'carnes' }"
            @click="$emit('filtrar', 'carnes')"
          >
            <i class="bi bi-droplet-fill me-2"></i>Carnes
          </button>
        </li>
        <li class="nav-item">
          <button
            class="sidebar-link"
            :class="{ 'sidebar-link-active': categoriaActiva === 'quesos' }"
            @click="$emit('filtrar', 'quesos')"
          >
            <i class="bi bi-egg-fill me-2"></i>Quesos
          </button>
        </li>
        <li class="nav-item">
          <button
            class="sidebar-link"
            :class="{ 'sidebar-link-active': categoriaActiva === 'huevos' }"
            @click="$emit('filtrar', 'huevos')"
          >
            <i class="bi bi-circle-fill me-2"></i>Huevos
          </button>
        </li>
        <li class="nav-item">
          <button
            class="sidebar-link"
            :class="{ 'sidebar-link-active': categoriaActiva === 'especias' }"
            @click="$emit('filtrar', 'especias')"
          >
            <i class="bi bi-stars me-2"></i>Especias
          </button>
        </li>
      </ul>
    </div>

    <hr class="sidebar-divider" />

    <!-- SECCIÓN: Contacto -->
    <div class="sidebar-section">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="sidebar-link" to="/dashboard/contacto">
            <i class="bi bi-envelope-fill me-2"></i>Contacto
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Versión al fondo -->
    <div class="mt-auto px-3 pb-3">
      <small class="sidebar-version">
        <i class="bi bi-shop me-1"></i> SalMendra v2.0
      </small>
    </div>

  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',

  props: {
    categoriaActiva: {
      type: String,
      default: 'todos'
    }
  },

  emits: ['filtrar']
}
</script>