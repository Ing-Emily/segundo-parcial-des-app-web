<script>

export default {
  data(){
    return {
      usuario:'',
      password:'',
      error:''
    }
  },

  methods: {

    login(){
      if(
        this.usuario === 'admin'
        &&
        this.password === '1234'
      ){
        localStorage.setItem(
          'usuario',
          'admin'
        )

        this.$router.push(
          '/dashboard/productos'
        )
      }
      else if(
        this.usuario === 'usuario'
        &&
        this.password === '1234'
      ){

        localStorage.setItem(
          'usuario',
          'usuario'
        )

        this.$router.push(
          '/dashboard/productos'
        )
      }

      else{

        this.error =
        'Credenciales incorrectas'

      }
    }
  }
}
</script>

<template>

<div class="login-wrapper">
  <div class="login-card">
    <div class="login-left">
      <div>

        <h1>SalMendra</h1>

        <p>
          Sistema administrativo
          para gestión de productos.
        </p>

      </div>
    </div>
    <div class="login-right">

      <h3 class="mb-4">
        Iniciar sesión
      </h3>

      <input
        v-model="usuario"
        class="form-control mb-3"
        placeholder="Usuario"
      >

      <input
        v-model="password"
        type="password"
        class="form-control mb-3"
        placeholder="Contraseña"
      >

      <button
        class="btn btn-danger w-100"
        @click="login"
      >
        Ingresar
      </button>

      <p class="text-danger mt-3">
        {{ error }}
      </p>

    </div>
  </div>
</div>

</template>