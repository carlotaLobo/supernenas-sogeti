import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthModel } from 'src/app/models/authModel';
import { UserModel } from 'src/app/models/userModel';
import { UsuarioService } from 'src/app/service/usuarios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('usuario') usuario: ElementRef;
  @ViewChild('contrasena') contrasena: ElementRef;

  public user: AuthModel;

  constructor(private _service: UsuarioService) {}

  ngOnInit(): void {}

  login() {

    this.user= new AuthModel(this.usuario.nativeElement.value, this.contrasena.nativeElement.value);

    this._service
      .getLogin(this.user)
      .subscribe((res) => {
        console.log(res);
      }, error=>{
        console.log(error);
      });
  }
}
