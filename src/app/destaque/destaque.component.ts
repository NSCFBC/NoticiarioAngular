import { AfterViewInit, Component, OnInit } from '@angular/core';


import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit, AfterViewInit{
  // destaque: any;
  topDezNoticias : any = [];
  constructor(private noticiaService: NoticiaService) { }
  ngAfterViewInit(): void {
    this.noticiaService.getTopDezNoticias().subscribe(data => {
      // console.log("dez noticias");
      // console.log(data);
      this.topDezNoticias = data;
    })
  }

  ngOnInit(): void {
    // this.destaque =[
    //   {
    //     titulo: 'Titulo noticia mais recente',
    //     subtitulo: 'Subtitulo noticia mais recente',
    //     numeroNT: 1
    //   },
    //   {
    //     titulo: 'Titulo noticia mais recente 2',
    //     subtitulo: 'Subtitulo noticia mais recente 2',
    //     numeroNT: 2
    //   },
    //   {
    //     titulo: 'Titulo noticia mais recente 3',
    //     subtitulo: 'Subtitulo noticia mais recente 3',
    //     numeroNT: 3
    //   }
    //   ,
    //   {
    //     titulo: 'Titulo noticia mais recente 4',
    //     subtitulo: 'Subtitulo noticia mais recente 4',
    //     numeroNT: 4
    //   }
    //   ,
    //   {
    //     titulo: 'Titulo noticia mais recente 5',
    //     subtitulo: 'Subtitulo noticia mais recente 5',
    //     numeroNT: 5
    //   }
    //   ,
    //   {
    //     titulo: 'Titulo noticia mais recente 6',
    //     subtitulo: 'Subtitulo noticia mais recente 6',
    //     numeroNT: 6
    //   }


    // ]
  }

}
