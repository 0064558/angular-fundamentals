import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input() userId!: string;
  name = '';
  isAddingTask = false;

  // injeção de dependência do serviço TasksService para gerenciar as tarefas
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('userId') ?? '';
      this.name = DUMMY_USERS.find((user) => user.id === this.userId)?.name ?? '';
    });
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}