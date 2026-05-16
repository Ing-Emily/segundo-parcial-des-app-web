<script>

import ProductCardComponent from '../components/ProductCardComponent.vue'

import {
  getProducts,
  saveProducts
} from '../services/ProductService'

export default {

  components:{
    ProductCardComponent
  },

  data(){

    return {

      productos: [],

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

  },

  methods: {

    agregarProducto(){

      this.productos.push({
        ...this.nuevoProducto
      })

      saveProducts(this.productos)

    },

    eliminar(index){

      this.productos.splice(index,1)

      saveProducts(this.productos)

    }

  }

}

</script>

<template>

<h2 class="mb-4">
  Productos
</h2>

<div class="row">

  <div
    class="col-md-4 mb-4"
    v-for="(producto,index) in productos"
    :key="index"
  >

    <ProductCardComponent
      :producto="producto"
    />

    <button
      class="btn btn-danger mt-2"
      @click="eliminar(index)"
    >
      Eliminar
    </button>

  </div>

</div>

</template>