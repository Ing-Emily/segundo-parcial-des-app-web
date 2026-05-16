<script>

export default {

  props: ['producto']

}

</script>

<template>

<div class="card shadow">

  <img
    :src="producto.imagen"
    class="card-img-top"
  >

  <div class="card-body">

    <h5>{{ producto.nombre }}</h5>

    <p>{{ producto.descripcion }}</p>

    <p class="fw-bold">
      $ {{ producto.precio }}
    </p>

  </div>

</div>

</template>