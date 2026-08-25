import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // propriedade que vai receber o avatar do usuário selecionado por meio de um input,
  // que é uma forma de passar dados de um componente pai para um componente filho. 
  //@Input({required: true}) avatar!: string;

  // propriedade que vai receber o nome do usuário selecionado por meio de um input
  //@Input({required: true}) name!: string;

  //@Input({required: true}) id!: string;

  // propriedade que vai emitir um evento para o componente pai informando que o usuário foi selecionado
  // um output é uma forma de passar dados/eventos de um componente filho para um componente pai (O componente app é o pai do componente user)
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  // outra forma de declarar um input é usando a função input para passar os dados como um sinal
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // propriedade que vai armazenar o caminho da imagem do usuário selecionado por meio de um signal computado,
  // que é uma função que retorna um valor derivado de outros sinais
  //imagePath = computed(() => 'assets/users/' + this.avatar());

  // método que vai ser chamado quando o usuário clicar no botão
  onSelectUser() {
    // emite um evento para o componente pai informando que o usuário foi selecionado
    this.select.emit(this.user.id);
  }

  // propriedade que vai armazenar o usuário selecionado por meio de um signal, 
  // que é uma função que retorna um valor que pode ser atualizado e observado
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  // propriedade que vai armazenar o caminho da imagem do usuário selecionado por meio de um signal computado, 
  // que é uma função que retorna um valor derivado de outros sinais
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // propriedade que vai armazenar o caminho da imagem do usuário selecionado
  /*get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }*/

  // método que vai selecionar um usuário aleatoriamente e atualizar o sinal selectedUser
  /*onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }*/
}

// input passa os dados do component user para o component app, que é o componente pai, e o output passa os dados do component app para o component user, que é o componente filho