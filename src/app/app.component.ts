import { AfterViewInit, Component, DestroyRef, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { delay, filter, map, tap } from 'rxjs/operators';
import { NotificationService, ToastMessage } from '../app/core/notification.service';
import { ToastModule, ColorModeService } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { CommonModule } from '@angular/common';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>

 <c-toaster  placement="top-end">
  <c-toast #toastRef *ngFor="let toast of toasts; let i = index"
    [color]="toast.color || 'danger'"
    [autohide]="true"
    [delay]="toast.delay || 5000"
    (hidden)="remove(i)"
    class="custom-toast"
  >
  
    <ng-template c-toast-header>
      {{ toast.title || 'Error' }}
    </ng-template>
    {{ toast.body }}
  </c-toast>
</c-toaster>
  `,
  standalone: true,
  imports: [RouterOutlet, CommonModule, ToastModule]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Proyectos y Tareas';
  @ViewChildren('toastRef') toastRefs!: QueryList<ElementRef>;
  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #titleService = inject(Title);
  readonly #colorModeService = inject(ColorModeService);
  readonly #iconSetService = inject(IconSetService);

  toasts: ToastMessage[] = [];

  constructor(private notif: NotificationService, private renderer: Renderer2) {
    this.#titleService.setTitle(this.title);
    this.#iconSetService.icons = { ...iconSubset };

    // Suscríbete a los mensajes para actualizar los toasts
    this.notif.messages$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }
  ngAfterViewInit() {
    this.toastRefs.changes.subscribe(() => {
      setTimeout(() => {
        this.applyStyles();
      });
    });

    setTimeout(() => {
      this.applyStyles();
    });
  }

  private applyStyles() {
    this.toastRefs.forEach(el => {
      if (el && el.nativeElement) {
        const nativeEl = el.nativeElement as HTMLElement;
        this.renderer.setStyle(nativeEl, 'opacity', '1');
        this.renderer.setStyle(nativeEl, 'height', 'auto');
        this.renderer.setStyle(nativeEl, 'padding', '0.5rem 1rem');
        this.renderer.setStyle(nativeEl, 'marginBottom', '0.5rem');
      }
    });
  }

  ngOnInit(): void {
   this.#router.events.pipe(
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) return;
      // Aquí podrías actualizar el título o algo al cambiar ruta
    });

    this.#activatedRoute.queryParams.pipe(
      delay(1),
      map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
      filter(theme => ['dark', 'light', 'auto'].includes(theme)),
      tap(theme => this.#colorModeService.colorMode.set(theme)),
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe();
  }

  remove(index: number) {
    this.notif.clear(index);
  }
}
