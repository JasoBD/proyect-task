import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { TasksService, Task } from '../../../../core/tasks.service';
import { ButtonDirective, TableDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TooltipDirective,  ButtonDirective, TableDirective, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  data: Task[] = [];
  projectId = 0;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private svc: TasksService
  ) { }

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }

  load() {
    this.loading = true;
    this.svc.listByProject(1).subscribe({
      next: (tasks) => {
        this.data = tasks;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }


  create() {
    this.router.navigate([`/modulos/tasks/new`]);
  }

  edit(task: Task) {
    this.router.navigate([`/modulos/tasks/${task.id}/edit`]);
  }

  delete(task: Task) {
    if (confirm(`¿Eliminar tarea "${task.title}"?`)) {
      this.svc.delete(task.id).subscribe(() => this.load());
    }
  }

  toggle(task: Task) {
    const updated = { ...task, completed: !task.completed };
    this.svc.update(updated).subscribe(() => task.completed = updated.completed);
  }
}
