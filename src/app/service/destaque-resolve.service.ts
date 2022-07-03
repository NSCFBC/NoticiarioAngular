import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from '../model/noticia';
import { NoticiaService } from './noticia.service';
import { UsuarioServiceService } from './usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class DestaqueResolveService implements Resolve<any[]>{
  constructor(private noticiaService: NoticiaService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    let noticia: Noticia[] = [];
    // console.log("dados resolve destaque");
    // this.noticiaService.getNoticiasType(route.params['destaque']).subscribe(data => {

    //   console.log(data);

    // })

    return this.noticiaService.getNoticiasType(route.params['destaque']);
  }
}
