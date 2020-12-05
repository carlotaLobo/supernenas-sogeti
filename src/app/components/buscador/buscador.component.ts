import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UsuarioService } from 'src/app/service/usuarios';
import * as $ from 'jquery/dist/jquery.js';
import { UserModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  @ViewChild('search') search: ElementRef;

  public users: Array<UserModel>;
  paginaActual: number = 1;
  public mostrarModal: boolean;
  public usuario: UserModel;

  constructor(private _servicio: UsuarioService) {
    this.users = [];
    this.mostrarModal = false;
  }

  ngOnInit(): void {
    this.mostrarUsuario();
  }

  verUsuario(select) {
    this.mostrarModal = true;
    this.usuario=this.users[select];
    console.log(this.usuario)
  }

  mostrarUsuario() {
    this._servicio.getUsuarios().subscribe(
      (res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].identity.name == this.search.nativeElement.value) { 
            this.users.push(res[i]);
            this.paginacion('flex');
          }
        }
      },
      (error) => {
        console.log('error busqueda');
      }
    );
  }

  paginacion(opcion): void {
    $(document).ready(function () {
      $('.ngx-pagination').css('display', opcion);
    });
  }

  close(event) {
    //cierra ventana modal
    this.users = [];
    this.usuario = null;
    this.search.nativeElement.value = '';
    this.paginacion('none');
  }
}
