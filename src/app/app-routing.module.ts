import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgLoginGuard } from './canActivate/lg-login.guard';
import { ContainerHomeComponent } from './home-page/container-home/container-home.component';
import { FormAddNoticiaComponent } from './home-page/form-add-noticia/form-add-noticia.component';
import { NotFoundComponent } from './notFound/not-found/not-found.component';
import { NoticiaGenericComponent } from './noticia-generic/noticia-generic.component';
import { DestaqueResolveService } from './service/destaque-resolve.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContainerHomeComponent },
  { path: 'login', component: ContainerHomeComponent },
  {
    path: 'addNoticias',
    component: FormAddNoticiaComponent,
    canActivate : [LgLoginGuard],
  },
  {
    path: 'noticia/:destaque', component: NoticiaGenericComponent,
    resolve: {
      destaque: DestaqueResolveService
    }
  },
  {
    path: 'noticias', loadChildren: () => import('./noticias/noticias.module')
      .then(m => m.NoticiasModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule)
  },
  {path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
