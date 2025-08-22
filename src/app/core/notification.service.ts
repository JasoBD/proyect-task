import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  title?: string;
  body: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly messages = new BehaviorSubject<ToastMessage[]>([]);
  readonly messages$ = this.messages.asObservable();

  /**
   * Agrega un nuevo toast al listado
   */
  show(msg: ToastMessage) {
    this.messages.next([...this.messages.getValue(), msg]);
  }

  /**
   * Borra el toast en el índice dado
   */
  clear(index: number) {
    const current = [...this.messages.getValue()];
    current.splice(index, 1);
    this.messages.next(current);
  }

  /**
   * Borra todos los toasts activos
   */
  clearAll() {
    this.messages.next([]);
  }

  /**
   * Atajo para errores
   */
  error(body: string, title = 'Error') {
    this.show({ body, title, color: 'danger' });
  }

  /**
   * Atajo para éxito
   */
  success(body: string, title = 'Éxito') {
    this.show({ body, title, color: 'success' });
  }

  /**
   * Atajo para info
   */
  info(body: string, title = 'Info') {
    this.show({ body, title, color: 'info' });
  }

  /**
   * Atajo para advertencias
   */
  warning(body: string, title = 'Advertencia') {
    this.show({ body, title, color: 'warning' });
  }
}
