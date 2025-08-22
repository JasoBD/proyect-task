import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from '../../../../core/projects.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, FormControlDirective, FormDirective, FormFeedbackComponent, FormLabelDirective, GutterDirective, TooltipDirective } from '@coreui/angular';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,
    FormDirective, TooltipDirective,
    FormLabelDirective,
    FormControlDirective,
    ReactiveFormsModule, FormsModule, FormDirective, GutterDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, ButtonDirective
    , ButtonDirective],
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent implements OnInit {
  model: Project = { id: 0, title: '', description: '' };
  title = 'Nuevo Proyecto';

  constructor(private route: ActivatedRoute, private svc: ProjectsService, private router: Router) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.title = 'Editar Proyecto';
      this.svc.get(id).subscribe(p => this.model = p);
    }
  }

  customStylesValidated = false;

  save(event: Event, titleInput: string, descInput: string) {
    event.preventDefault();

    if (!titleInput) {
      this.customStylesValidated = true;
      return;

    }
    this.model.title = titleInput;
    this.model.description = descInput;

    const callback = () => this.router.navigateByUrl('/projects');

    if (this.model.id) this.svc.update(this.model).subscribe(callback);
    else this.svc.create(this.model).subscribe(callback);
  }

  cancel(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/projects');
  }

}
