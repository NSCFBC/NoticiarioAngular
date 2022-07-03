import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioServiceService } from './usuario-service.service';


@Injectable({
  providedIn: 'root'
})
export class EditUserResolveService implements Resolve<Usuario>{

  constructor(private userService: UsuarioServiceService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Usuario> {
    // let user: Usuario = new Usuario();
    // console.log("antes do resolve")
    // console.log(route.params['id']);
    // console.log(this.userService.getUserId(route.params['id']));
    return this.userService.getUserId(route.params['id']);
  }
}
