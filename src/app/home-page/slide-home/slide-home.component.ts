import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/service/noticia.service';


@Component({
  selector: 'app-slide-home',
  templateUrl: './slide-home.component.html',
  styleUrls: ['./slide-home.component.css']
})
export class SlideHomeComponent implements OnInit, AfterViewInit{
  noticias: any = [];
  constructor(private noticiaService: NoticiaService) { }
  ngAfterViewInit(): void {
    this.noticiaService.getNoticiasEmDestaque().subscribe(data => {
      // console.log("Noticia em destaque");
      // console.log(data);
      this.noticias = data;
    });
  }


  ngOnInit(): void {
    this.noticias = [
      {
        msg: 'conteudo slide um',
        img: '/assets/img01Slide.jpg',
        src: '1',
        index: 0,
      },
      {
        msg: 'conteudo slide dois',
        img: '/assets/img02Slide.jpg',
        src: '2',
        index: 1,
      },
      {
        msg: 'conteudo slide tres',
        img: '/assets/img03Slide.jpg',
        src: '3',
        index: 2,
      }
    ]

  }

}
