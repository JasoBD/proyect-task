import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface Task { id: number; projectId: number; title: string; completed: boolean; }

@Injectable({ providedIn: 'root' })
export class TasksService {
  private base = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private api: ApiService){}
  listByProject(projectId: number){ return this.api.get<any[]>(this.base).pipe(map(todos => todos.filter(t => t.userId === projectId).map(t => ({ id: t.id, projectId: t.userId, title: t.title, completed: t.completed })))); }
  get(id: number){ return this.api.get<any>(`${this.base}/${id}`).pipe(map(t => ({ id: t.id, projectId: t.userId, title: t.title, completed: t.completed }))); }
  create(task: Task){ const body = { userId: task.projectId, title: task.title, completed: task.completed }; return this.api.post<any>(this.base, body); }
  update(task: Task){ const body = { userId: task.projectId, title: task.title, completed: task.completed }; return this.api.put<any>(`${this.base}/${task.id}`, body); }
  delete(id: number){ return this.api.delete(`${this.base}/${id}`); }
}
