import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private notif: NotificationService
  ) {}

private handleError(error: HttpErrorResponse) {
  let message = 'Ocurrió un error inesperado. Por favor, intenta nuevamente.';

  if (error.error instanceof ErrorEvent) {
    // Error del lado del cliente (ej. problemas de red)
    message = `No se pudo conectar con el servidor: ${error.error.message}`;
  } else {
    // Error del lado del servidor
    switch (error.status) {
      case 0:
        message = 'No hay conexión con el servidor.';
        break;
      case 400:
        message = 'Solicitud incorrecta. Verifica los datos enviados.';
        break;
      case 401:
        message = 'No estás autorizado. Inicia sesión para continuar.';
        break;
      case 403:
        message = 'No tienes permisos para realizar esta acción.';
        break;
      case 404:
        message = 'No se encontró el recurso solicitado.';
        break;
      case 500:
        message = 'Error interno del servidor. Intenta más tarde.';
        break;
      default:
        message = `Error ${error.status}: ${error.statusText || 'Problema desconocido'}`;
        break;
    }
  }

  this.notif.show({ body: message, color: 'danger' });
  return throwError(() => new Error(message));
}


  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(catchError(err => this.handleError(err)));
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body).pipe(catchError(err => this.handleError(err)));
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body).pipe(catchError(err => this.handleError(err)));
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(catchError(err => this.handleError(err)));
  }
}
