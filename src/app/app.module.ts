import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Login2Component } from './components/login2/login2.component';
import { CardsComponent } from './components/cards/cards.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UserComponent } from './components/user/user.component';
import {UsuarioService} from './service/usuarios';
import { HttpClientModule } from '@angular/common/http';
import {​​​​ FormsModule }​​​​ from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    CardsComponent,
    BuscadorComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
