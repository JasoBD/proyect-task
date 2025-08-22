import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { ProjectsService, Project } from '../../../../core/projects.service';
import { ButtonDirective, TableDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, TooltipDirective, ButtonDirective, RouterModule, TableDirective],
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  data: Project[] = [];
  loading = false;

  constructor(
    private svc: ProjectsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list().subscribe({
      next: (projects) => {
        this.data = projects;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  refresh(): void {
    this.load();
  }

  create(): void {
    this.router.navigateByUrl('/modulos/projects/new');
  }

  edit(project: Project): void {
    this.router.navigateByUrl(`/modulos/projects/${project.id}/edit`);
  }

  goTasks(project: Project): void {
    this.router.navigateByUrl(`/modulos/projects/${project.id}/tasks`);
  }

  delete(project: Project): void {
    if (confirm(`¿Eliminar proyecto "${project.title}"?`)) {
      this.svc.delete(project.id).subscribe(() => this.load());
    }
  }
}
