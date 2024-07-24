import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, taskStatusOptionProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [taskStatusOptionProvider]
})
export class TasksListComponent {
  private tasksService = inject(TasksServiceToken);
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  
  tasks = computed(() => {
    switch(this.selectedFilter()){
      case 'open':
        return this.tasksService.allTasks().filter(t => t.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks().filter(t => t.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTasks().filter(t => t.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
