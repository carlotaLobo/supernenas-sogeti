import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthModel } from 'src/app/models/authModel';
import { UsuarioService } from 'src/app/service/usuarios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('usuario') usuario: ElementRef;
  @ViewChild('contrasena') contrasena: ElementRef;

  public user: AuthModel;

  constructor(private _service: UsuarioService, private _router:Router) {}

  ngOnInit(): void {}

  login() {
    this.user = new AuthModel(
      this.usuario.nativeElement.value,
      this.contrasena.nativeElement.value
    );

    this._service.getLogin(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['buscador']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
