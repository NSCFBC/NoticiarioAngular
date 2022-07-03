import { AfterViewInit, Component, OnInit } from '@angular/core';

import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-lateral-slide',
  templateUrl: './lateral-slide.component.html',
  styleUrls: ['./lateral-slide.component.css']
})
export class LateralSlideComponent implements OnInit, AfterViewInit{
  noticiasEconomia: any = [];

  constructor(private noticiaService: NoticiaService) { }
  ngAfterViewInit(): void {
    this.noticiaService.getBuscarTopEconomia().subscribe(data => {
      // console.log("dadaos top economia");
      this.noticiasEconomia = data;
   })
  }

  ngOnInit(): void {
  }

}
