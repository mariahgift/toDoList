import { Injectable } from '@angular/core';
import { TASKS } from './model/taskModel/sampletasks';
import { Task } from './model/taskModel/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = TASKS;
  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}
