import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Usuario } from 'src/app/model/usuario';

import { UsuarioServiceService } from 'src/app/service/usuario-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  usuarios: any[] = [];
  usuarioDelete : Usuario = new Usuario();
  displayEdit: boolean = false;

  constructor(private usuarioServiceService:  UsuarioServiceService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }


  ngAfterViewInit(): void {
    this.listar();
  }

  listar() {
    this.usuarioServiceService.getUsers().subscribe(data => {
      this.usuarios = data;
    })
  }
  editar(id: number) {
    this.displayEdit = true;
  }
  deletar(id: number) {
    let result;
    this.usuarioServiceService.delete(id).subscribe(data => {
      this.listar();
      this.toastr.success('Pessoa removida com sucesso!', 'Sucesso!');
    }, error => {
      this.toastr.error(error.error.detail, 'Erro!');
      // console.log("error deletar");
      // console.log(error.error.detail);
    });
    this.router.navigate(['/users/']);
  }

  ngOnInit(): void {
    //   this.route.params.subscribe(data => {
    //     this.usuarioDelete = this.usuarioServiceService.getUser(data);
    //    })

  }

}
