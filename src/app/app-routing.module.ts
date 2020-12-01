import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'' , component:BuscadorComponent},
  {path:'user/:id' , component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
