

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'productos',
        name: 'Productos',
        component: () => import('@/views/ProductView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'clientes',
        name: 'Clientes',
        component: () => import('@/views/ClientesView.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    // Ruta no encontrada — redirige al login
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Guardia global: protege rutas que requieren sesión activa
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (to.meta.requiresAuth && !isLoggedIn) {
    // Sin sesión → al login
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isLoggedIn) {
    // Ya logueado → al dashboard
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router