import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface Project { id: number; title: string; description: string; }

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private base = 'https://jsonplaceholder.typicode.com/users';
  constructor(private api: ApiService){}

  list() { return this.api.get<any[]>(this.base).pipe(map(users => users.map(u => ({ id: u.id, title: u.name, description: u.company?.catchPhrase || u.email })))); }
  get(id: number){ return this.api.get<any>(`${this.base}/${id}`).pipe(map(u => ({ id: u.id, title: u.name, description: u.company?.catchPhrase || u.email }))); }
  create(p: Project){ const body = { name: p.title, company: { catchPhrase: p.description } }; return this.api.post<any>(this.base, body); }
  update(p: Project){ const body = { name: p.title, company: { catchPhrase: p.description } }; return this.api.put<any>(`${this.base}/${p.id}`, body); }
  delete(id: number){ return this.api.delete(`${this.base}/${id}`); }
}
