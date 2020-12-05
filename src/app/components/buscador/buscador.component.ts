import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
//import { $ } from 'protractor';
import { UsuarioService } from 'src/app/service/usuarios';
import * as $ from 'jquery/dist/jquery.js';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  @ViewChild('search') search: ElementRef;

  public users: Array<string>;
  paginaActual: number = 1;


  constructor(private _servicio: UsuarioService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.mostrarUsuario();
  }

  mostrarUsuario() {
    this._servicio.getUsuarios().subscribe(
      (res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].identity.name == this.search.nativeElement.value) {    
            this.users.push(res[i]);
            $(document).ready(function () {
              $('.ngx-pagination').css('display', 'flex');
            });
          }else{
            this.users.push(res[i]);
          } 
        }
      },
      (error) => {
        console.log('error busqueda');
      }
    );
  }

  close(event){
    console.log('padre')
    this.users=[];
  }
}
