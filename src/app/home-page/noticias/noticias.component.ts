import { Categoria } from './../../model/categoria';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AfterViewInit, Component, OnInit } from '@angular/core';

import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, AfterViewInit {
  noticias: any;
  noticia: any = [];
  showStandard: boolean = false;
  display: boolean = false;

  constructor(private noticiaService: NoticiaService
    , public ngxSmartModalService: NgxSmartModalService) { }
  ngAfterViewInit(): void {
    this.noticiaService.topDownNoticia().subscribe(data => {
      // console.log("dados carregados");
      // console.log(data);
      this.noticias = data;
      // console.log("dados carregados");
    });
  }
  showDialog(noticia : any) {
    // this.display = !this.display;
    this.noticia = noticia;
    this.noticia.nomeCat = this.noticia.categoria.nome;
    // console.log("sjdsaipd");
    // console.log(this.noticia.categoria.nome);
  }

  ngOnInit(): void {
    this.display = false;
  }

}
