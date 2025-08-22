import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksService, Task } from '../../../../core/tasks.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ColComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, FormControlDirective, FormDirective, FormFeedbackComponent, FormLabelDirective, FormSelectDirective, FormTextDirective, GutterDirective, InputGroupComponent, InputGroupTextDirective, RowDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,
    FormDirective, TooltipDirective,
    FormLabelDirective,
    FormControlDirective,
    
    ReactiveFormsModule, FormsModule, FormDirective, GutterDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, FormCheckComponent,  ButtonDirective
    , FormCheckComponent,

    ButtonDirective],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  model: Task = { id: 0, projectId: 0, title: '', completed: false };
  title = 'Nueva Tarea';
  projectId = 0;
  taskId?: number;

  constructor(private route: ActivatedRoute, private svc: TasksService, private router: Router) { }

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    const tId = Number(this.route.snapshot.paramMap.get('taskId'));
    if (tId) {
      this.taskId = tId;
      this.title = 'Editar Tarea';
      this.svc.get(tId).subscribe(t => this.model = t);
    }
    this.model.projectId = this.projectId;
  }
  customStylesValidated = false;

  save(e: Event, title: string, completed: boolean) {
    e.preventDefault();
    if (!title) {
      this.customStylesValidated = true;
      return;

    }

    this.model.title = title;
    this.model.completed = completed;

    const redirect = () => this.router.navigateByUrl(`/projects/${this.projectId}/tasks`);

    if (this.taskId) this.svc.update(this.model).subscribe(redirect);
    else this.svc.create(this.model).subscribe(redirect);
  }

  cancel(e: Event) {
    e.preventDefault();
    this.router.navigateByUrl(`/projects/${this.projectId}/tasks`);
  }
}
