import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppBaseServidor } from '../app-base-servidor';
import { Noticia } from '../model/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  noticias: any = [];
  informacao: any = [];
  constructor(private http: HttpClient) { }
  getInserirNoticias(noticia: Noticia): any {
    this.http.post(AppBaseServidor.insertNoticia, noticia).subscribe(data => {
      this.noticias = data;
    });

    return this.noticias;
  }

  getTopDezNoticias(): Observable<any> {
    return this.http.get(AppBaseServidor.buscarTopDezNoticias);
  }
  getBuscarBottomNotica():  Observable<any>{
    return this.http.get(AppBaseServidor.buscarBottomNotica);
  }
  getBuscarTopEconomia():  Observable<any>{
    return this.http.get(AppBaseServidor.buscarTopNoticias);
  }
  getNoticiasEmDestaque():  Observable<any>{
    return this.http.get(AppBaseServidor.buscarTopNoticias);
  }

  topDownNoticia():  Observable<any>{
    return this.http.get(AppBaseServidor.topDownNoticia);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(AppBaseServidor.deleteNoticia + id);
  }
  getNoticias(): Observable<any> {
    return this.http.get(AppBaseServidor.listarNoticias);
    // console.log('informacao');
    // console.log(this.noticias);
    // console.log('informacao');
  }

  getNoticiasType(tipo: any): Observable<any> {
    return this.http.get(AppBaseServidor.toptipoNoticia + tipo);
  }

  insertNoticia(noticia: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post(AppBaseServidor.insertNoticia, noticia, httpOptions).subscribe(data => {
      // console.log(data);
      this.informacao = data;
    });
    return this.informacao;
  }

}
