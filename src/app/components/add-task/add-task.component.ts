import { Component } from '@angular/core';
import { Task } from 'src/app/model/taskModel/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  tasks: Task [] = [];
  newTaskTitle = '';

  constructor(private taskService : TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    // const tasks = this.taskService.getTasks();
    this.tasks.push({title: this.newTaskTitle, isChecked: false});
    this.newTaskTitle = '';
  }
}
