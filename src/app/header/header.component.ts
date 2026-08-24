import { Component } from '@angular/core';

@Component({
    selector: 'app-header', // O seletor é o nome da tag HTML que será usada para renderizar o componente na página. 
    standalone: true, // A propriedade standalone indica que o componente é independente e não depende de outros módulos para ser usado.
    templateUrl: './header.component.html', // O templateUrl é o caminho para o arquivo HTML que define a estrutura do componente.
    styleUrl: './header.component.css', // O styleUrl é o caminho para o arquivo CSS que define os estilos do componente.
})
export class HeaderComponent {}