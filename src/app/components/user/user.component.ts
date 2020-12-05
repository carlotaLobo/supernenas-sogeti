import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { UsuarioService } from 'src/app/service/usuarios';
import * as $ from 'jquery/dist/jquery.js';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public user: UserModel;
  @Input() users: Array<UserModel>;
  @Output() close= new EventEmitter();

  constructor(
    private _activaterouter: ActivatedRoute,
    private _service: UsuarioService
  ) {}

  ngOnInit(): void {

  }

  closeModal(){
    this.close.emit();
  }
}
