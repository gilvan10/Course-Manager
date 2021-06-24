import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //QUANDO O ANGULAR INICIAR ELE VAI CARREGAR ESSAS ROTAS NA ROOT (forRoot espera receber um array de rotas).
    RouterModule.forRoot([
      {
        //Quando trabalha com rotas, o selector (que são as tag dos componentes) o programador pode deixar de usar elas, por causa que vai ser chamado o component via rotas. 
        path: 'courses', component: CourseListComponent
      },
      {
        //Nesta rota vai ser passado o id, id é o nome do parametro que vai ser passado. Está dando erro
        path: 'courses/info/:id', component: CourseInfoComponent    
      },
      {
        //Base da nossa rota          //Não estou redirecionando para outro componente, mas para o rotas. Preciso colocar o , pathMatch: 'full'
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        //Quando a rota não é encontrada entra nessa rota.
        path: '**', component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
