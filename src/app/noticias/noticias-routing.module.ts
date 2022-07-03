import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiaLazyComponent } from './noticia-lazy/noticia-lazy.component';
import { RoutingComponentComponent } from './routing-component/routing-component.component';

const routesa: Routes = [
  {
    path: '', component: RoutingComponentComponent,
    children: [
      { path: '', redirectTo: 'todasNoticias'},
      { path: 'todasNoticias', component: NoticiaLazyComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesa)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
