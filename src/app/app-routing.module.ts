import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './service/authguard';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'buscador' , component:BuscadorComponent, canActivate: [AuthGuard]},
  {path:'user/:id' , component:UserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
