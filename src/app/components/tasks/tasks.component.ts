import { Component } from '@angular/core';
import { TASKS } from '../../model/taskModel/sampletasks';
// import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {

  tasks = TASKS;

  hideSelected = false;

  newTaskTitle = '';

  addTask() {
    this.tasks.push({title: this.newTaskTitle, isChecked: false});
    this.newTaskTitle = '';
  }

  onClickToggle() {
    this.hideSelected = !this.hideSelected;
  }
}
