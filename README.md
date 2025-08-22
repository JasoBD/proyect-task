# 🧩 Proyectos y Tareas - Admin Panel

Este proyecto es una aplicación web construida con **Angular** y basada en el **CoreUI Angular Admin Template**. Se ha personalizado para incluir notificaciones tipo _toast_ y gestión de tareas/proyectos.

---

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
```
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
```

---

## **Instalación y Ejecución**
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/usuario/proyect-task.git
   cd proyect-task
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Ejecutar en modo desarrollo:**
   ```bash
   ng serve
   ```
4. **Abrir en el navegador:**  
   ```
   http://localhost:4200
   ```


---

## **APIs Utilizadas**
- **Proyectos:**  
  `https://jsonplaceholder.typicode.com/users`  
- **Tareas:**  
  `https://jsonplaceholder.typicode.com/todos`

---

## **Autor**
- **Jason Andres Murillo Mena**
- Contacto: [jamurillo049@gmail,com]
