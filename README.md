
# Project Manager – Angular 18 (Standalone + Material + Reactive Forms)

Aplicación web de **gestión de proyectos y tareas** desarrollada con **Angular 18**, usando **standalone components** (sin NgModules), **Angular Material** para modales y **formularios reactivos**.  

Cumple con:
- **Autenticación simulada** (login/logout con `LocalStorage`).
- **Gestión de proyectos y tareas** desde APIs públicas.
- **Lazy Loading**, **Guards**, **servicios**, **manejo de errores**.
- **UX moderna** con Angular Material.

---

## **Requisitos previos**
- **Node.js** 18+  
- **Angular CLI** 18 (`npm install -g @angular/cli`)

---

## **Instalación**
```bash
git clone <URL_DEL_REPOSITORIO>
cd project-manager-angular18-standalone-material-reactive
npm install
npm start
```
Abrir en el navegador:  
```
http://localhost:4200
```

---

## **Estructura del Proyecto**
```
src/
 ├── app/
 │   ├── app.config.ts         # Configuración de router y providers
 │   ├── app.component.ts      # Componente raíz
 │   │
 │   ├── auth/
 │   │   ├── login.component.ts        # Login (Standalone + Reactive)
 │   │   ├── auth.service.ts          # Servicio de autenticación
 │   │   └── auth.guard.ts           # Guard de rutas protegidas
 │   │
 │   ├── projects/
 │   │   ├── projects.component.ts    # Lista de proyectos
 │   │   ├── project-form.component.ts# Formulario reactivo de proyectos
 │   │   ├── projects.service.ts      # Servicio CRUD (API + Local)
 │   │   └── index.routes.ts          # Rutas con Lazy Loading
 │   │
 │   ├── tasks/
 │   │   ├── tasks.component.ts       # Lista de tareas por proyecto
 │   │   ├── task-form.component.ts   # Formulario reactivo de tareas
 │   │   ├── tasks.service.ts         # Servicio CRUD (API + Local)
 │   │   └── index.routes.ts          # Rutas con Lazy Loading
 │   │
 │   ├── shared/
 │   │   ├── confirm-dialog.component.ts # Modal de confirmación (Material)
 │   │   └── api.service.ts             # Manejo genérico de peticiones HTTP
 │
 ├── main.ts               # Bootstrap principal standalone
 └── styles.css            # Estilos globales
```

---

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

## **Confirmación con Modales**
- `ConfirmDialogComponent` basado en **Angular Material** (`MatDialog`).
- Reutilizable para cualquier acción destructiva (Eliminar Proyecto/Tarea).

Ejemplo:
```ts
const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  data: { title: 'Eliminar Proyecto', message: '¿Seguro que deseas eliminar este proyecto?' }
});
dialogRef.afterClosed().subscribe(result => {
  if (result) this.deleteProject(id);
});
```

---

## **Formularios Reactivos**
- Uso de `FormBuilder` + `Validators.required`.
- Feedback visual con Angular Material (`<mat-form-field>`, `<mat-error>`).

---

## **Manejo de Errores**
- Servicio `ApiService` centraliza `HttpClient`.
- Captura errores (`HttpErrorResponse`) y muestra mensajes.

---

## **Comandos Útiles**
- **Iniciar servidor local**: `npm start`
- **Build producción**: `ng build --configuration production`
- **Lint**: `ng lint`

---

## **Criterios que cumple (Prueba Técnica)**
1. **Estructura y Modularidad (25%)** – standalone + lazy loading + guards.
2. **Formularios Reactivos (20%)** – Validaciones y UX.
3. **Consumo de APIs y Errores (20%)** – HTTP + manejo de fallos.
4. **Lazy Loading y Optimización (15%)**.
5. **UI/UX (10%)** – Angular Material, modales, feedback.
6. **Calidad del Código (10%)** – Servicios centralizados, tipado fuerte con `interfaces`.

---

## **Licencia**
MIT – Libre uso y modificación.
