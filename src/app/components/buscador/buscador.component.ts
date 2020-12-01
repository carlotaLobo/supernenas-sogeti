import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuarios';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @ViewChild("search") search: ElementRef;
  public user: Array<string>;
  paginaActual: number =1;

  constructor(private _servicio: UsuarioService) {

    this.user=[];
  }

  ngOnInit(): void {
    this.mostrarUsuario();
  }

  mostrarUsuario() {

    this._servicio.getUsuarios().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {   
        if(res[i].identity.name == this.search.nativeElement.value){
            this.user.push(res[i]);
            console.log(res[i])
        }else{
          this.user.push(res[i]);
          console.log(res[i])
        }
      }     
    }, error=>{
      console.log("error get")
    });
  }
}
