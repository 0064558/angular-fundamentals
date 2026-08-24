import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// O método bootstrapApplication é usado para inicializar a aplicação Angular, 
// carregando o componente raiz (AppComponent) e configurando o ambiente de execução. 
// Ele retorna uma Promise que resolve quando a aplicação é inicializada com sucesso, ou rejeita com um erro caso ocorra algum problema durante a inicialização.
bootstrapApplication(AppComponent).catch((err) => console.error(err));
