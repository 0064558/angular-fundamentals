import { Routes } from "@angular/router";
import { TasksComponent } from "./app/tasks/tasks.component";
import { NoTasksComponent } from "./app/no-tasks/no-tasks.component";

export const routes: Routes = [
    {
        path: '', // Define a rota para a página inicial
        component: NoTasksComponent // Especifica o componente que será renderizado quando a rota for acessada
    },
    {
        path: 'tasks/:userId', // Define a rota de tarefas para um usuário
        component: TasksComponent // Especifica o componente que será renderizado quando a rota for acessada
    },
]