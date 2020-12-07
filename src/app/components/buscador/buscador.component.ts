import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuarios';
import * as $ from 'jquery/dist/jquery.js';
import { UserModel } from 'src/app/models/userModel';
import { JobsService } from 'src/app/service/jobs';
import { JobsModel } from 'src/app/models/jobsModel';
import { JobGradesModel } from 'src/app/models/jobGradesModel';
import { LicensesModel } from 'src/app/models/licensesModel';
import { VehiclesModel } from 'src/app/models/vehiclesModel';
import { Router } from '@angular/router';

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
  public trabajos: Array<JobsModel>;
  public trabajo: JobsModel;
  public jobGradels: Array<JobGradesModel>;
  public jobGradel: JobGradesModel;
  public activarModal: boolean;
  constructor(
    private _servicio: UsuarioService,
    private _serviceJob: JobsService,
    private _router: Router
  ) {
    this.users = [];
    this.mostrarModal = false;
    this.activarModal = false;
  }

  ngOnInit(): void {}

  cerrarSesion() {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  jobs() {
    this._serviceJob.getJobs().subscribe((res) => {
      this.trabajos = Object.values(res);
      this.trabajos.filter((j) => {
        if (j.name == this.usuario.job) {
          this.trabajo = j;
          this.trabajos = Object.values(j);
          this.jobGradels = Object.values(this.trabajos[2]);

          for (let i = 0; i < this.jobGradels.length; i++) {
            if (this.jobGradels[i].grade == this.usuario.job_grade) {
              this.trabajo.job_grades = this.jobGradels[i];
            }
          }
        }
      });
    });
  }

  verUsuario(select) {
    this.mostrarModal = true;
    this.usuario = this.users[select];

    this.usuario.licenses = Object.values(this.usuario.licenses);
    this.usuario.vehicles = Object.values(this.usuario.vehicles);

    this.jobs();
  }

  mostrarUsuario() {
    this._servicio.getUsuarios().subscribe(
      (res) => {
        for (let i = 0; i < res.length; i++) {
          var data = res[i].identity.name + res[i].identity.firstname;

          if (
            res[i].identity.name ==
              this.search.nativeElement.value.replaceAll(' ', '') ||
            res[i].identity.name + res[i].identity.firstname ==
              this.search.nativeElement.value.replaceAll(' ', '') ||
            res[i].identity.name +
              res[i].identity.firstname +
              res[i].identity.secondname ==
              this.search.nativeElement.value.replaceAll(' ', '') ||
            res[i].identity.firstname ==
              this.search.nativeElement.value.replaceAll(' ', '') ||
            res[i].identity.secondname ==
              this.search.nativeElement.value.replaceAll(' ', '') ||
            res[i].identity.firstname + res[i].identity.secondname ==
              this.search.nativeElement.value.replaceAll(' ', '')
          ) {
            this.users.push(res[i]);
            this.paginacion('flex');
          } else {
            this.mostrarModal = true;
          }
        }
      },
      (error) => {}
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
