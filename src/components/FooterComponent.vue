<template>
  <footer class="footer-wrapper mt-auto py-3">
    <div class="container-fluid">
      <div class="row align-items-center">

        <!-- Texto de derechos -->
        <div class="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
          <span class="footer-text">
            <i class="bi bi-c-circle me-1"></i>
            2026 <strong>SalMendra</strong> — Tu Salsamentería de Confianza
          </span>
        </div>

        <!-- Categorías del negocio -->
        <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
          <span class="footer-badge"><i class="bi bi-droplet-fill me-1"></i>Carnes</span>
          <span class="footer-badge"><i class="bi bi-egg-fill me-1"></i>Quesos</span>
          <span class="footer-badge"><i class="bi bi-stars me-1"></i>Especias</span>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>