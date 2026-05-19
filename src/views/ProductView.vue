<script>

import ProductCardComponent
from '../components/ProductCardComponent.vue'

import {
  getProducts,
  saveProducts
}
from '../services/ProductService'

export default {

  components: {

    ProductCardComponent

  },

  data(){

    return {

      productos: [],

      editando: null,

      mostrarFormulario: false,

      esAdmin: false,

      nuevoProducto: {

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

    const usuario =
    localStorage.getItem('usuario')

    this.esAdmin =
    (usuario === 'admin')

  },

  methods: {

    toggleFormulario(){

      this.mostrarFormulario =
      !this.mostrarFormulario

    },

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

      this.mostrarFormulario = true

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

      this.mostrarFormulario = false

    }

  }

}

</script>

<template>

<div>

  <div class="page-header">

    <div>

      <h2 class="page-title">
        Productos
      </h2>

      <p class="page-subtitle">

        Gestión de productos SalMendra

      </p>

    </div>

    <button
      v-if="esAdmin"
      class="btn btn-danger"
      @click="toggleFormulario"
    >

      <i class="bi bi-plus-circle"></i>

      {{
        mostrarFormulario
        ? 'Cerrar formulario'
        : 'Agregar producto'
      }}

    </button>

  </div>

  <div
    v-if="mostrarFormulario && esAdmin"
    class="crud-form"
  >

    <h4 class="mb-4">

      {{
        editando !== null
        ? 'Editar producto'
        : 'Nuevo producto'
      }}

    </h4>

    <div class="row">

      <div class="col-md-6 mb-3">

        <input
          v-model="nuevoProducto.nombre"
          class="form-control"
          placeholder="Nombre"
        >

      </div>

      <div class="col-md-6 mb-3">

        <input
          v-model="nuevoProducto.precio"
          class="form-control"
          placeholder="Precio"
        >

      </div>

      <div class="col-md-6 mb-3">

        <input
          v-model="nuevoProducto.categoria"
          class="form-control"
          placeholder="Categoría"
        >

      </div>

      <div class="col-md-6 mb-3">

        <input
          v-model="nuevoProducto.imagen"
          class="form-control"
          placeholder="URL imagen"
        >

      </div>

      <div class="col-12 mb-3">

        <textarea
          v-model="nuevoProducto.descripcion"
          class="form-control"
          placeholder="Descripción"
        ></textarea>

      </div>

      <div class="col-12">

        <button
          v-if="editando === null"
          class="btn btn-success"
          @click="agregarProducto"
        >

          Guardar producto

        </button>

        <button
          v-else
          class="btn btn-warning"
          @click="guardarEdicion"
        >

          Guardar cambios

        </button>

      </div>

    </div>

  </div>

  <div class="products-grid">

    <ProductCardComponent

      v-for="(producto,index) in productos"

      :key="index"

      :producto="producto"

      :esAdmin="esAdmin"

      @editar="cargarEdicion(index)"

      @eliminar="eliminar(index)"

    />

  </div>

</div>

</template>
