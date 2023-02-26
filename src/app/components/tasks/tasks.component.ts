import { Component } from '@angular/core';
import { Task } from 'src/app/model/taskModel/task';
import { TaskService } from 'src/app/task.service';

import { TASKS } from '../../model/taskModel/sampletasks';
// import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  tasks:  Task[] = [];
  hideSelected = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
  }

  onClickToggle() {
    this.hideSelected = !this.hideSelected;
  }
}
