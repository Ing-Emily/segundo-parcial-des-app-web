import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [

  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    component: LoginView
  },

  {
    path: '/dashboard',
    component: DashboardView,

    children: [

      {
        path: 'productos',
        component: ProductView
      },

      {
        path: 'contacto',
        component: ContactView
      }

    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router