import { Component, Input } from '@angular/core';

import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  constructor(private taskService: TasksService) {
  }

  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  addNewTask() {
    this.isAddingTask = true;
  }

  closeModal() {
    this.isAddingTask = false;
  }
}
