<script>

export default {

  props: [
    'producto',
    'esAdmin'
  ],

  emits: [
    'editar',
    'eliminar'
  ]

}

</script>

<template>

<div class="product-card">

  <div class="image-container">

    <img
      :src="producto.imagen"
      class="product-image"
      @error="e => e.target.src='https://placehold.co/400x300?text=Producto'"
    >

  </div>

  <div class="product-body">

    <span class="product-category">
      {{ producto.categoria }}
    </span>

    <h3 class="product-title">
      {{ producto.nombre }}
    </h3>

    <p class="product-description">
      {{ producto.descripcion }}
    </p>

    <div class="product-footer">

      <span class="product-price">
        $ {{ producto.precio }}
      </span>

      <div
        v-if="esAdmin"
        class="product-actions"
      >

        <button
          class="custom-btn warning-btn"
          @click="$emit('editar')"
        >
          Editar
        </button>

        <button
          class="custom-btn delete-btn"
          @click="$emit('eliminar')"
        >
          Eliminar
        </button>

      </div>

    </div>

  </div>

</div>

</template>