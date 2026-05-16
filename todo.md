# ✅ TODO — Segundo Parcial: Salmendra
> Aplicación web modular con Vue.js 3 + Bootstrap 5  
> Salsamentería con venta de carnes, especias y quesos  
> Repositorio: `segundo-parcial-des-app-web`

---

## 👥 Integrantes

| Integrante | Alias en Git | Responsabilidad principal |
|---|---|---|
| Integrante 1 | `dev-1` | Setup, Login, Dashboard, Navbar, Sidebar |
| Integrante 2 | `dev-2` | CRUD Productos, Componentes de tarjeta, Footer, README |

---

## 🌿 Estructura de Ramas

```
main
├── develop               ← rama de integración
│   ├── feature/setup-proyecto
│   ├── feature/login
│   ├── feature/dashboard-layout
│   ├── feature/navbar-sidebar
│   ├── feature/crud-productos
│   ├── feature/product-card
│   ├── feature/footer
│   └── docs/readme
```

> **Flujo:** Cada rama se fusiona a `develop` mediante Pull Request. Al final, `develop` → `main`.

---

## 🌿 Rama: `feature/setup-proyecto`
**Responsable:** Integrante 1  
**Base:** migración desde el proyecto HTML/CSS/JS del parcial anterior

### Tareas
- [ ] Inicializar proyecto con `npm create vue@latest` (Vue 3 + Vue Router)
- [ ] Instalar dependencias: `bootstrap`, `bootstrap-icons`, `vue-router`
- [ ] Configurar `main.js` importando Bootstrap CSS y JS
- [ ] Crear estructura de carpetas:
  ```
  src/
  ├── assets/
  ├── components/
  ├── views/
  ├── router/
  ├── services/
  └── data/
      ├── usuarios.json
      └── products.json
  ```
- [ ] Definir paleta de colores de Salmendra en variables CSS (rojos, tierra, crema — acorde a carnes/quesos)
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🌿 Rama: `feature/login`
**Responsable:** Integrante 1

### Tareas
- [ ] Crear `LoginView.vue` en `src/views/`
- [ ] Crear `src/data/usuarios.json` con al menos 2 usuarios de prueba:
  ```json
  [
    { "usuario": "admin", "password": "1234" },
    { "usuario": "empleado", "password": "abcd" }
  ]
  ```
- [ ] Implementar formulario con Bootstrap (campos usuario y contraseña)
- [ ] Validar credenciales cargando el JSON localmente
- [ ] Mostrar alerta Bootstrap (`alert-danger`) si las credenciales son incorrectas
- [ ] Redirigir a `/dashboard` si el login es exitoso usando `vue-router`
- [ ] Guardar sesión básica en `localStorage` (flag `isLoggedIn`)
- [ ] Proteger rutas: si no hay sesión, redirigir a `/login`
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🌿 Rama: `feature/dashboard-layout`
**Responsable:** Integrante 1

### Tareas
- [ ] Crear `DashboardView.vue` como layout contenedor
- [ ] Incluir `<NavbarComponent />`, `<SidebarComponent />` y `<FooterComponent />`
- [ ] Añadir `<router-view />` en el área de contenido principal para cargar vistas hijas
- [ ] Configurar rutas hijas en `router/index.js`:
  ```
  /login
  /dashboard            → DashboardView (layout)
  /dashboard/productos  → ProductView (vista hija)
  ```
- [ ] Verificar que Navbar y Sidebar persistan al navegar entre vistas hijas
- [ ] Hacer el layout responsivo con grid/flex de Bootstrap
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🌿 Rama: `feature/navbar-sidebar`
**Responsable:** Integrante 1

### Tareas

#### NavbarComponent (`src/components/NavbarComponent.vue`)
- [ ] Mostrar logo/nombre **Salmendra** con ícono de `bootstrap-icons`
- [ ] Incluir botón de cerrar sesión (limpia `localStorage` y redirige a `/login`)
- [ ] Usar clases Bootstrap: `navbar`, `navbar-dark`, `bg-danger` (o color de paleta)

#### SidebarComponent (`src/components/SidebarComponent.vue`)
- [ ] Menú lateral con las siguientes rutas e íconos:
  | Ítem | Ruta | Ícono sugerido |
  |---|---|---|
  | Dashboard | `/dashboard` | `bi-speedometer2` |
  | Productos | `/dashboard/productos` | `bi-box-seam` |
  | Clientes *(opcional)* | `/dashboard/clientes` | `bi-people` |
- [ ] Resaltar la ruta activa con `router-link-active`
- [ ] Recibir props si es necesario (nombre del usuario logueado)
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🌿 Rama: `feature/crud-productos`
**Responsable:** Integrante 2

### Tareas
- [ ] Crear `src/data/products.json` con **mínimo 10 productos** de Salmendra. Ejemplo:
  ```json
  [
    { "id": 1, "nombre": "Chorizo Santarrosano", "categoria": "Carnes", "precio": 12000, "stock": 50, "imagen": "chorizo.jpg" },
    { "id": 2, "nombre": "Queso Campesino", "categoria": "Quesos", "precio": 8500, "stock": 30, "imagen": "queso.jpg" },
    { "id": 3, "nombre": "Pimienta Negra Molida", "categoria": "Especias", "precio": 4500, "stock": 100, "imagen": "pimienta.jpg" }
  ]
  ```
- [ ] Crear `src/services/productService.js` con funciones que lean/escriban en `localStorage`:
  - `getProducts()` — carga desde localStorage o inicializa desde JSON
  - `saveProducts(products)` — guarda array en localStorage
  - `addProduct(product)` — agrega uno nuevo
  - `updateProduct(product)` — actualiza por id
  - `deleteProduct(id)` — elimina por id
- [ ] Crear `ProductView.vue` en `src/views/` con:
  - **Listado** en tabla Bootstrap con columnas: nombre, categoría, precio, stock, acciones
  - **Botón "Nuevo Producto"** que abre modal de Bootstrap
  - **Modal de creación/edición** con formulario (nombre, categoría, precio, stock, imagen)
  - **Botón Editar** por fila → pre-carga datos en el modal
  - **Botón Eliminar** por fila → confirmación con `alert` o modal Bootstrap
  - **Botón Ver detalles** → muestra info completa del producto
- [ ] Precargar productos del JSON en `localStorage` si aún no existen al montar la vista
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🌿 Rama: `feature/product-card`
**Responsable:** Integrante 2

### Tareas
- [ ] Crear `ProductCardComponent.vue` en `src/components/`
- [ ] Recibir por **props**: `nombre`, `precio`, `imagen`, `categoria`
- [ ] Mostrar tarjeta Bootstrap (`card`) con imagen, nombre, precio y botón "Ver detalles"
- [ ] Emitir **evento** `@ver-detalle` al hacer clic en el botón, enviando el producto al padre
- [ ] Usar el componente dentro de `ProductView.vue` en la vista de cuadrícula (toggle lista/tarjetas, opcional)
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🌿 Rama: `feature/footer`
**Responsable:** Integrante 2

### Tareas
- [ ] Crear `FooterComponent.vue` en `src/components/`
- [ ] Mostrar: `© 2025 Salmendra — Todos los derechos reservados`
- [ ] Estilo coherente con la paleta del negocio
- [ ] Fijo en la parte inferior del layout del Dashboard
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🌿 Rama: `docs/readme`
**Responsable:** Integrante 2

### Tareas
- [ ] Crear `README.md` completo con:
  - [ ] Descripción del negocio Salmendra y objetivo de la app
  - [ ] Información de los 2 integrantes
  - [ ] Captura/imagen de la estructura del proyecto
  - [ ] Explicación de la modularización (componentes, vistas, rutas)
  - [ ] Ejemplo de cómo se simuló el "consumo de API" con `productService.js` y localStorage
  - [ ] Ejemplo de comunicación entre componentes (props de `ProductCardComponent` y eventos)
  - [ ] Nota aclaratoria: *"El login es solo educativo y no representa autenticación real"*
  - [ ] Links a commits, ramas y Pull Requests relevantes
- [ ] Subir rama y abrir PR hacia `develop`

---

## 🔀 Pull Requests requeridos (evidencia colaborativa)

| PR | De | Hacia | Responsable |
|---|---|---|---|
| PR-1 | `feature/setup-proyecto` | `develop` | Integrante 1 |
| PR-2 | `feature/login` | `develop` | Integrante 1 |
| PR-3 | `feature/dashboard-layout` | `develop` | Integrante 1 |
| PR-4 | `feature/navbar-sidebar` | `develop` | Integrante 1 |
| PR-5 | `feature/crud-productos` | `develop` | Integrante 2 |
| PR-6 | `feature/product-card` | `develop` | Integrante 2 |
| PR-7 | `feature/footer` | `develop` | Integrante 2 |
| PR-8 | `docs/readme` | `develop` | Integrante 2 |
| PR-9 | `develop` | `main` | Ambos |

---

## 📋 Orden sugerido de ejecución

```
1. setup-proyecto
2. login
3. crud-productos
4. product-card
5. navbar-sidebar
6. dashboard-layout
7. footer
8. readme
9. PR develop → main
```

---

## ✅ Checklist final antes de sustentar

- [x ] El login valida contra `usuarios.json` y muestra alerta en error
- [ x] El dashboard carga rutas hijas sin perder Navbar/Sidebar
- [ ] El CRUD de productos funciona completo (crear, leer, editar, eliminar) con localStorage
- [x ] Los productos se precargan desde `products.json` (mínimo 10)
- [ ] `ProductCardComponent` usa props y emite eventos
- [ ] El diseño es responsivo y usa Bootstrap en toda la app
- [ ] El README está completo con todos los puntos requeridos
- [ ] El repositorio se llama exactamente `segundo-parcial-des-app-web`
- [ ] Hay mínimo 8 Pull Requests visibles en GitHub
- [ ] Cada integrante tiene commits propios en el historial