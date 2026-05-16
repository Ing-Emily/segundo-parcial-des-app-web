<template>

<aside class="sidebar p-3">

  <h3>Categorías</h3>

  <ul class="list-unstyled">

    <li>
      <router-link to="/dashboard/productos">
        Productos
      </router-link>
    </li>

    <li>
      <router-link to="/dashboard/contacto">
        Contacto
      </router-link>
    </li>

  </ul>

</aside>

</template>

<style scoped>

.sidebar{
  width:250px;
  min-height:100vh;
  background:#422020;
  color:white;
}

a{
  color:white;
  text-decoration:none;
}

</style>