import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AppBaseServidor } from '../app-base-servidor';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {



  informacao: any = [];
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getUser(data: Params): any{
  // let user = new Usuario();
    this.http.get(AppBaseServidor.usuario + data['id']).subscribe(data => {
      return data;
    });
  }

  getUserId(data: Number): Observable<any>{
    // let user = new Usuario();
    return this.http.get(AppBaseServidor.usuario + data);
    }
  insertUser(usuario: any): Observable<any> {
    return this.http.post(AppBaseServidor.usuario, usuario, this.httpOptions);
    // return this.informacao;
  }
  getUsers(): Observable<any> {
    return this.http.get(AppBaseServidor.usuario);
  }
  delete(id: Number): Observable<any> {
    return this.http.delete(AppBaseServidor.usuario + id);
  }

}
