import { AppBaseServidor } from './../app-base-servidor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../model/usuario';
import { UsuarioServiceService } from './usuario-service.service';

import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  // Access-Control-Allow-Origin: *
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService,
  private user: UsuarioServiceService) { }
  // usuario = { login: '', senha: '' };

  verificaPermissao(tipoPermissao: string): boolean {
    let decoded: any = jwt_decode(localStorage.getItem('token')!);
    let permissoesToken: string[] = decoded["aud"].toString().split(",");
    console.log("decoddeddd");
    console.log(decoded["aud"].toString().split(","));
    console.log(permissoesToken.includes(tipoPermissao));
    return permissoesToken.includes(tipoPermissao);

  }

  userLogado(): boolean {
    return localStorage.getItem("token") != null ? true : false;
  }

  login(usuario : Usuario) {
    // alert("user" + usuario.login);

    return this.http.post(AppBaseServidor.login, JSON.stringify(usuario),this.httpOptions)
      .subscribe(data => {
        //corpo do Retorno e captura o token
        // console.log(data);
     let token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
        // let result: any[] = [];
    //  this.http.get(AppBaseServidor.usuario + "e?email=maria").subscribe(ms => {
    //   localStorage.setItem("permissao", ms.toString());
    //   });
        //armazena em uma localStorage para
        localStorage.setItem("token", token);
        // this.verificaPermissao("ROLE_ADMIN");
        // localStorage.setItem("papeis", token);

        let toast = this.toastr.success('Login realizado com sucesso!!', 'Sucesso!',
        { "timeOut": 1500, "extendedTimeOut": 1000, "closeButton": true, "progressBar": true });

        if (toast) {
          toast.onHidden.subscribe(() => {
            // this.router.navigateByUrl('fazer');
            this.router.navigate(['/home'])
            .then(() => {
                 window.location.reload();
             });
          })
       }
      },
      error => {
        // console.error('Erro ao fazer login');
        let toast = this.toastr.error('Usuário ou senha inválidos!!', 'Erro',
        {"timeOut": 1500, "extendedTimeOut": 1000, "closeButton": true,  "progressBar": true});
      //   if (toast) {
      //     toast.onHidden.subscribe(() => {
      //       this.router.navigate(['fazer']);
      //     })
      //  }
        // alert('Email ou senha inválidos !');
        // this.toastr.success('Hello world!', 'Toastr fun!');
        }
      );
  }
}
