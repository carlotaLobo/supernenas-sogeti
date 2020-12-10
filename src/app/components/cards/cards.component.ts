import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobGradesModel } from 'src/app/models/jobGradesModel';
import { JobsModel } from 'src/app/models/jobsModel';
import { UserModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() usuario: UserModel;
  @Input() trabajo: JobsModel;


  constructor() {
    console.log(this.usuario)
  }

  ngOnInit(): void {
    console.log(this.usuario)
  }
}
