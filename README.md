
# 🛒 Segundo Parcial- App Web
# Salmendra

Aplicación web desarrollada con Vue 3, Vite y Bootstrap para la gestión de productos mediante un sistema CRUD con almacenamiento local usando `localStorage`.

---

# 📌 Características

✅ Gestión de productos
✅ Agregar productos
✅ Editar productos
✅ Eliminar productos
✅ Persistencia de datos en localStorage
✅ Sistema básico de login
✅ Control de administrador
✅ Componentes reutilizables
✅ Interfaz responsive con Bootstrap 5

---

# 🚀 Tecnologías utilizadas

* Vue 3
* Vite
* Bootstrap 5
* JavaScript
* Vue Router
* HTML5
* CSS3

---

# 📂 Estructura del proyecto

```txt id="f2d9zh"
src/
│
├── assets/                     # Recursos estáticos
│
├── components/                 # Componentes reutilizables
│   ├── FooterComponent.vue
│   ├── HeaderComponent.vue
│   ├── ProductCardComponent.vue
│   └── SidebarComponent.vue
│
├── data/                       # Datos simulados en JSON
│   ├── products.json
│   └── usuarios.json
│
├── router/                     # Configuración de rutas
│   └── index.js
│
├── services/                   # Servicios y lógica
│   └── ProductService.js
│
├── views/                      # Vistas principales
│   ├── ContactView.vue
│   ├── DashboardView.vue
│   ├── LoginView.vue
│   └── ProductView.vue
│
├── App.vue                     # Componente raíz
├── main.js                     # Punto de entrada
└── style.css                   # Estilos globales
```

---

# ⚙️ Instalación del proyecto

Se creo el proyecto y se creo en un repositorio del github Ing-Emily

Ingresar a la carpeta del proyecto:

```bash id="7jix4m"
cd segundo-parcial-des-app-web
```

Instalar dependencias:

```bash id="llrn06"
npm install
```

---

# ▶️ Ejecutar el proyecto

Iniciar servidor de desarrollo:

```bash id="2pq0fi"
npm run dev
```

Abrir en el navegador:

```txt id="z4e2an"
http://localhost:5173
```

---

# 📦 Compilar para producción

```bash id="6jlwm"
npm run build
```

---

# 🔐 Sistema de autenticación

El proyecto maneja un control básico de usuarios utilizando:

```js id="f7qbxr"
localStorage
```
Los usuarios se almacenan en:

```txt id="vr8ugp"
src/data/usuarios.json
```

El sistema valida si el usuario es administrador para permitir:

* Agregar productos
* Editar productos
* Eliminar productos

---

# 🛍️ Gestión de productos

La aplicación permite:

| Función    | Descripción       |
| ---------- | ----------------- |
| Crear      | Agregar productos |
| Leer       | Mostrar productos |
| Actualizar | Editar productos  |
| Eliminar   | Borrar productos  |

---

# 💾 Persistencia de datos

Los productos se almacenan localmente usando:

```js id="n1zk9i"
localStorage
```

Servicio encargado:

```txt id="6hn6di"
src/services/ProductService.js
```

Funciones principales:

```js id="ev8grt"
getProducts()
saveProducts()
```

---

# 🧩 Componentes principales

## HeaderComponent

Barra de navegación principal.

---

## SidebarComponent

Menú lateral de navegación.

---

## FooterComponent

Pie de página de la aplicación.

---

## ProductCardComponent

Tarjeta reutilizable para mostrar productos dinámicamente.

---

# 📄 Vistas principales

| Vista         | Función                 |
| ------------- | ----------------------- |
| LoginView     | Inicio de sesión        |
| DashboardView | Panel principal         |
| ProductView   | Gestión de productos    |
| ContactView   | Información de contacto |

---

# 🎨 Bootstrap

Instalación:

```bash id="w3qjlwm"
npm install bootstrap
```

Configuración en `main.js`:

```js id="x9j6en"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
```

---

# 📌 Scripts disponibles

| Comando         | Descripción             |
| --------------- | ----------------------- |
| npm run dev     | Ejecuta el proyecto     |
| npm run build   | Compila producción      |
| npm run preview | Vista previa producción |

---

#  Autor

Proyecto desarrollado por
Emily Gregoria Picon Rincon-0192653
 Jhoan Esteban Baena Correa-0192451
 para el segundo parcial de Desarrollo de Aplicaciones Web.

---

# 📚 Uso académico

Proyecto desarrollado solo con fines educativos y académicos.




# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
