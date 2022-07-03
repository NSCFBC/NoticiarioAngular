import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';

import { NoticiaLazyComponent } from './noticia-lazy/noticia-lazy.component';
import { RoutingComponentComponent } from './routing-component/routing-component.component';

import { NoticiasRoutingModule } from './noticias-routing.module';

@NgModule({
  declarations: [
    NoticiaLazyComponent,
    RoutingComponentComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    NoticiasRoutingModule
  ],
  exports: [

  ]
})
export class NoticiasModule { }
