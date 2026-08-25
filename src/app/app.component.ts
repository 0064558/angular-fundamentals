import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TasksComponent } from "./tasks/tasks.component";


// Um componente é uma classe que contém metadados que definem como o Angular deve processar, 
// instanciar e usar a classe. O decorador @Component é usado para marcar a classe como um componente Angular 
// e fornecer informações sobre o componente, como seu seletor, modelo e estilos.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
