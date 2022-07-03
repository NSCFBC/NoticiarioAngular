import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { NoticiaService } from '../service/noticia.service';

@Component({
  selector: 'app-noticia-generic',
  templateUrl: './noticia-generic.component.html',
  styleUrls: ['./noticia-generic.component.css']
})
export class NoticiaGenericComponent implements OnInit, AfterViewInit {
  noticias: any;
  noticia: any = [];
  showStandard: boolean = false;
  display: boolean = false;

  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute
  , public ngxSmartModalService: NgxSmartModalService) { }


  ngAfterViewInit(): void {
    // this.noticiaService.getNoticias().subscribe(data => {
    //   console.log("dados carregados");
    //   console.log(data);
    //   this.noticias = data;
    //   console.log("dados carregados");
    // });
  }
  showDialog(noticia : any) {
    // this.display = !this.display;
    this.noticia = noticia;
    // console.log("sjdsaipd");
    // console.log(this.noticia);
  }

  ngOnInit(): void {

    //teste de dados via parametro snapshot
    // console.log("noticias via parametro");
    // console.log(this.route.snapshot.data['destaque']);
    this.noticias = this.route.snapshot.data['destaque'];
    // console.log("noticias via parametro");
    this.display = false;
  }

}
