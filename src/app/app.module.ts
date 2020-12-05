import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UserComponent } from './components/user/user.component';
import {UsuarioService} from './service/usuarios';
import { HttpClientModule } from '@angular/common/http';
import {​​​​ FormsModule }​​​​ from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { GeneroPipe } from './pipes/genero.pipe';
import { MayusculasPipe } from './pipes/mayusculas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardsComponent,
    BuscadorComponent,
    UserComponent,
    GeneroPipe,
    MayusculasPipe
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
