import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-baixo-slide',
  templateUrl: './baixo-slide.component.html',
  styleUrls: ['./baixo-slide.component.css']
})
export class BaixoSlideComponent implements OnInit,AfterViewInit {
  noticias: any = [];

  constructor(private noticiaService: NoticiaService) { }
  ngAfterViewInit(): void {
    this.noticiaService.getBuscarBottomNotica().subscribe(data => {
      // console.log("dado slide noticia");
      this.noticias = data;
      // console.log(data[0].id);
    });
    // console.log(this.noticias[0]);
  }

  ngOnInit(): void {
  }

}
