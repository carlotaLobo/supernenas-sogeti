import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() usuario: UserModel;
  @Output() close = new EventEmitter();

  public vehicles = {};

  constructor() {}

  ngOnInit(): void {
    this.vehicle();
  }

  vehicle() {
    var v = JSON.stringify(this.usuario['vehicles']);
    var init = v.indexOf('{');
    var end = v.indexOf(':');
    var last = v.lastIndexOf('}');

    this.vehicles = JSON.parse(
      v.replace(v.substring(init, end + 1), '').replace(v.charAt(last), '')
    );
  }

  closeModal() {
    this.close.emit();
  }
}
