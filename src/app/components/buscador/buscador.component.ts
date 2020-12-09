import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuarios';
import * as $ from 'jquery/dist/jquery.js';
import { UserModel } from 'src/app/models/userModel';
import { JobsService } from 'src/app/service/jobs';
import { JobsModel } from 'src/app/models/jobsModel';
import { JobGradesModel } from 'src/app/models/jobGradesModel';
import { Router } from '@angular/router';
import '@popperjs/core/dist/umd/popper.min.js';

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
  public aux: number;
  constructor(
    private _servicio: UsuarioService,
    private _serviceJob: JobsService,
    private _router: Router
  ) {
    this.users = [];
    this.mostrarModal = false;
    this.aux = 1;
  }

  ngOnInit(): void {
  }

  cerrarSesion(opcion?: number) {
    if (opcion == 1) {
      localStorage.removeItem('token');
      this._router.navigate(['/']);
    } else if (opcion == 0) {
      document.getElementById('modalLogOut').style.visibility = 'hidden';
    } else {
      document.getElementById('modalLogOut').style.visibility = 'visible';
    }
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
    this.users = [];
    this.aux = 1;
    this._servicio.getUsuarios().subscribe(
      (res) => {
        for (let i = 0; i < res.length; i++) {
          var nombre = res[i].identity.name.toLowerCase();
          var first = res[i].identity.firstname.toLowerCase();
          var second = res[i].identity.secondname.toLowerCase();
          var searchData = this.search.nativeElement.value
            .replaceAll(' ', '')
            .toLowerCase();
          if (
            nombre == searchData ||
            nombre + first == searchData ||
            nombre + first + second == searchData ||
            first == searchData ||
            second == searchData ||
            first + second == searchData
          ) {
            this.users.push(res[i]);
            this.paginacion('flex');
          }
        }
        if (this.users.length <= 0) {
          this.aux = 0;
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
    this.users = [];
    this.usuario = null;
    this.search.nativeElement.value = '';
    this.paginacion('none');
  }
}
