<template>
  
  <div class="login-wrapper min-vh-100 d-flex align-items-center justify-content-center py-4">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">

          <div class="card shadow-lg border-0 login-card">

            <!-- Componente: logo, nombre y badges del negocio -->
            <LoginBrand />

            <div class="card-body p-0">

              <!-- Componente: alerta de error (credenciales incorrectas) -->
              <div class="px-4 pt-3">
                <LoginAlert
                  tipo="danger"
                  :mensaje="errorMsg"
                  @cerrar="errorMsg = ''"
                />

                <!-- Componente: alerta de éxito (bienvenida) -->
                <LoginAlert
                  tipo="success"
                  :mensaje="successMsg"
                />
              </div>

              <!-- Componente: formulario con inputs, checkbox y botón -->
              <!-- Recibe loading por prop, emite credenciales por evento -->
              <LoginForm
                :loading="loading"
                @submit-login="handleLogin"
              />

            </div>

            <!-- Footer con nota educativa -->
            <div class="card-footer text-center border-0 login-footer">
              <small class="text-muted">
                <i class="bi bi-info-circle me-1"></i>
                Validación educativa — no representa autenticación real.
              </small>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Importar datos locales
import usuarios from '@/data/usuarios.json'

// Importar componentes hijos
import LoginBrand from '@/components/login/LoginBrand.vue'
import LoginAlert from '@/components/login/LoginAlert.vue'
import LoginForm  from '@/components/login/LoginForm.vue'

export default {
  name: 'LoginView',

  // Registro de componentes hijos
  components: {
    LoginBrand,
    LoginAlert,
    LoginForm
  },

  data() {
    return {
      errorMsg:   '', // → prop :mensaje de LoginAlert tipo danger
      successMsg: '', // → prop :mensaje de LoginAlert tipo success
      loading:    false  // → prop :loading de LoginForm (spinner)
    }
  },

  methods: {
    /**
     * Recibe las credenciales emitidas por LoginForm (@submit-login)
     * y las valida contra usuarios.json.
     *
     * @param {Object} credenciales - { usuario, password }
     */
    handleLogin({ usuario, password }) {
      this.errorMsg   = ''
      this.successMsg = ''
      this.loading    = true

      // Pequeño delay para mostrar el spinner del botón
      setTimeout(() => {
        // Buscar en usuarios.json (no hardcodeado)
        const usuarioEncontrado = usuarios.find(
          u => u.usuario === usuario && u.password === password
        )

        if (usuarioEncontrado) {
          this.successMsg = `¡Bienvenido, ${usuarioEncontrado.nombre}!`

          // Guardar sesión básica en localStorage
          localStorage.setItem('isLoggedIn',    'true')
          localStorage.setItem('usuarioActual', usuarioEncontrado.usuario)
          localStorage.setItem('nombreUsuario', usuarioEncontrado.nombre)
          localStorage.setItem('rolUsuario',    usuarioEncontrado.rol)

          // Redirigir al dashboard tras mostrar el mensaje de éxito
          setTimeout(() => {
            this.$router.push('/dashboard')
          }, 900)

        } else {
          // Mostrar alerta Bootstrap de error
          this.errorMsg = 'Usuario o contraseña incorrectos. Intenta de nuevo.'
          this.loading  = false
        }
      }, 700)
    }
  }
}
</script>

