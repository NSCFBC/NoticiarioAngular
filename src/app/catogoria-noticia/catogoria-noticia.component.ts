import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-catogoria-noticia',
  templateUrl: './catogoria-noticia.component.html',
  styleUrls: ['./catogoria-noticia.component.css']
})
export class CatogoriaNoticiaComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          { label: 'Destaque', icon: 'pi pi-fw pi-home' },
          {label: 'Cidade', icon: 'pi pi-fw pi-home'},
          {label: 'Politica', icon: 'pi pi-fw pi-calendar'},
          {label: 'Esporte', icon: 'pi pi-fw pi-pencil'},
          {label: 'Educação', icon: 'pi pi-fw pi-file'},
          {label: 'Outros', icon: 'pi pi-fw pi-cog'}
      ];
  }

}
