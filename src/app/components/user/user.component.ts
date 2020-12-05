import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  @Input() usuario:Object;
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.usuario)
  }

  closeModal() {
    this.close.emit();
  }
}
