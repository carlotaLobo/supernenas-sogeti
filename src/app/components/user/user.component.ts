import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobGradesModel } from 'src/app/models/jobGradesModel';
import { JobsModel } from 'src/app/models/jobsModel';
import { UserModel } from 'src/app/models/userModel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() usuario: UserModel;
  @Output() close = new EventEmitter();
  @Input() trabajo: JobGradesModel;

  constructor() {}

  ngOnInit(): void {
 

  }

  closeModal() {
    this.close.emit();
  }
}
