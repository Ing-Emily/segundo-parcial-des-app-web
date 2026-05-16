<script>

import {
  getProducts,
  saveProducts
} from '../services/ProductService'

export default {

  data(){
    return {
      productos: [],

      editando: null,

      esAdmin: false,

      nuevoProducto:{
        nombre:'',
        precio:'',
        descripcion:'',
        categoria:'',
        imagen:''
      }
    }
  },

mounted(){
  this.productos = getProducts()

  const user = localStorage.getItem('usuario')

  this.esAdmin = (user === 'admin')
},

  methods: {

    agregarProducto(){
      this.productos.push({
        ...this.nuevoProducto
      })
      saveProducts(this.productos)
      this.limpiarFormulario()
    },

    eliminar(index){
      this.productos.splice(index,1)
      saveProducts(this.productos)
    },

    cargarEdicion(index){
      this.editando = index
      this.nuevoProducto = {
        ...this.productos[index]
      }
    },

    guardarEdicion(){
      this.productos[this.editando] = {
        ...this.nuevoProducto
      }

      saveProducts(this.productos)

      this.editando = null
      this.limpiarFormulario()
    },

    limpiarFormulario(){
      this.nuevoProducto = {
        nombre:'',
        precio:'',
        descripcion:'',
        categoria:'',
        imagen:''
      }
    }

  }

}

</script>

<template>

<h2 class="mb-4">Productos</h2>
  <div v-if="esAdmin">
    <!-- formulario -->
    <div class="mb-3">

    <input v-model="nuevoProducto.nombre" class="form-control mb-2" placeholder="Nombre">
    <input v-model="nuevoProducto.precio" class="form-control mb-2" placeholder="Precio">
    <input v-model="nuevoProducto.descripcion" class="form-control mb-2" placeholder="Descripción">
    <input v-model="nuevoProducto.categoria" class="form-control mb-2" placeholder="Categoría">
    <input v-model="nuevoProducto.imagen" class="form-control mb-2" placeholder="URL de imagen">

  </div>
</div>




<!-- 🔘 BOTONES -->
<button
  v-if="editando !== null"
  @click="guardarEdicion"
  class="btn btn-success mb-3"
>
  Guardar cambios
</button>

<button v-if="esAdmin" @click="agregarProducto">
  Agregar producto
</button>

<!-- 📊 TABLA -->
<table class="table table-striped">

  <thead>
    <tr>
      <th>Imagen</th>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Acciones</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="(producto,index) in productos" :key="index">

  <td>
    <img
      :src="producto.imagen"
      @error="e => e.target.src='https://placehold.co/60'"
      style="width:60px; height:60px; object-fit:cover;"
    >
  </td>

  <td>{{ producto.nombre }}</td>
  <td>{{ producto.precio }}</td>

  <td>

<button 
  v-if="esAdmin"
  @click="cargarEdicion(index)"
>
      Editar
    </button>

<button 
  v-if="esAdmin"
  @click="eliminar(index)"
>
      Eliminar
    </button>

  </td>

</tr>
  </tbody>

</table>

</template>