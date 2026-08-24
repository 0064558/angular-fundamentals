import { Component, computed, signal } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // propriedade que vai armazenar o usuário selecionado por meio de um signal, 
  // que é uma função que retorna um valor que pode ser atualizado e observado
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // propriedade que vai armazenar o caminho da imagem do usuário selecionado por meio de um signal computado, 
  // que é uma função que retorna um valor derivado de outros sinais
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // propriedade que vai armazenar o caminho da imagem do usuário selecionado
  /*get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }*/

    // método que vai selecionar um usuário aleatoriamente e atualizar o sinal selectedUser
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
