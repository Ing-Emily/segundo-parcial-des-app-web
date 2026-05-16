<script>

import usuarios from '../data/usuarios.json'

export default {

  data() {

    return {

      user: '',
      pass: '',
      error: ''

    }

  },

  methods: {

    login() {

      const existe = usuarios.find(
        u =>
          u.user === this.user &&
          u.password === this.pass
      )

      if(existe){

        localStorage.setItem('usuario', this.user)

        this.$router.push('/dashboard/productos')

      } else {

        this.error = 'Credenciales incorrectas'

      }

    }

  }

}

</script>

<template>

<div class="container d-flex justify-content-center align-items-center vh-100">

  <div class="card p-5 shadow">

    <h2 class="text-center mb-4 text-danger">
      SalMendra
    </h2>

    <input
      v-model="user"
      class="form-control mb-3"
      placeholder="Usuario"
    >

    <input
      v-model="pass"
      type="password"
      class="form-control mb-3"
      placeholder="Contraseña"
    >

    <button
      @click="login"
      class="btn btn-danger"
    >
      Ingresar
    </button>

    <div
      v-if="error"
      class="alert alert-danger mt-3"
    >
      {{ error }}
    </div>

  </div>

</div>

</template>