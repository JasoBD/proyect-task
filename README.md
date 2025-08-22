# 🧩 Proyectos y Tareas - Admin Panel

Este proyecto es una aplicación web construida con **Angular** y basada en el **CoreUI Angular Admin Template**. Se ha personalizado para incluir notificaciones tipo _toast_ y gestión de tareas/proyectos.

---
Cumple con:
- **Autenticación simulada** (login/logout con `LocalStorage`).
- **Gestión de proyectos y tareas** desde APIs públicas.
- **Lazy Loading**, **Guards**, **servicios**, **manejo de errores**.
----

## 🚀 Tecnologías utilizadas

- [Angular 18](https://angular.io/)
- [CoreUI Angular](https://coreui.io/angular/)
- [RxJS](https://rxjs.dev/)
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) (opcional)
- SCSS + Bootstrap 5

---

## 🔧 Instalación

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# Instala las dependencias
npm install

# Corre la aplicación
ng serve

## **Estructura del Proyecto**

src/
└── app/
    ├── core/                     # Lógica central y servicios compartidos
    │   ├── api.service.ts        # Servicio genérico HTTP con manejo de errores
    │   ├── auth.guard.ts         # Protección de rutas
    │   ├── auth.service.ts       # Autenticación (Login/Logout)
    │   ├── notification.service.ts # Notificaciones en UI
    │   ├── projects.service.ts   # Lógica de proyectos
    │   ├── tasks.service.ts      # Lógica de tareas
    │   ├── layout/               # Layout principal de la app
    │   │   ├── default-layout/
    │   │   ├── default-footer/
    │   │   ├── default-header/
    │   │   ├── _nav.ts
    │   │   ├── default-layout.component.html
    │   │   ├── default-layout.component.scss
    │   │   ├── default-layout.component.ts
    │   │   └── index.ts
    │   └── index.ts
    │
    ├── views/                    # Vistas principales
    │   ├── dashboard/           # Panel principal
    │   ├── modulos/             # Espacio para módulos futuros
    │   ├── projects/            # Gestión de proyectos
    │   │   ├── project-form.component.ts
    │   │   └── projects-list.component.ts
    │   └── tasks/               # Gestión de tareas


## **Autenticación**
- **Login**: cualquier email + contraseña ≥ 4 caracteres.
- Guarda token simulado en `localStorage`.
- **Logout**: limpia sesión y redirige a login.
- **Guard (`authGuard`)**: protege rutas de proyectos y tareas.

---

## **Consumo de APIs**
- **Proyectos**: `https://jsonplaceholder.typicode.com/users`
- **Tareas**: `https://jsonplaceholder.typicode.com/todos`
- Se manejan **errores HTTP** con mensajes amigables.

---

## **Lazy Loading**
- `projects/` y `tasks/` se cargan **on-demand** con `loadChildren`.

---


---

## **Formularios Reactivos**
- Uso de `FormBuilder` + `Validators.required`.
- Feedback visual con Angular Material (`<mat-form-field>`, `<mat-error>`).

---

## **Manejo de Errores**
- Servicio `ApiService` centraliza `HttpClient`.
- Captura errores (`HttpErrorResponse`) y muestra mensajes.

---


## **Autor**
- **Jason Andres Murillo Mena**
- Contacto: [jamurillo049@gmail,com]
