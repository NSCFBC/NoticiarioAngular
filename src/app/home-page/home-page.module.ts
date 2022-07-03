import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
// import { NzModalModule } from 'ng-zorro-antd/modal';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {EditorModule} from 'primeng/editor';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxAnimationsModule } from 'ngx-animations';

import { ContainerHomeComponent } from './container-home/container-home.component';
import { SlideHomeComponent } from './slide-home/slide-home.component';
import { LateralSlideComponent } from './lateral-slide/lateral-slide.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { BaixoSlideComponent } from './baixo-slide/baixo-slide.component';
import { EstruturaGridComponent } from './estrutura-grid/estrutura-grid.component';
import { FormEntrarComponent } from './form-entrar/form-entrar.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormRemoverUserComponent } from './form-remover-user/form-remover-user.component';
import { FormAtualizarUserComponent } from './form-atualizar-user/form-atualizar-user.component';
import { FormAddNoticiaComponent } from './form-add-noticia/form-add-noticia.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { DestaqueComponent } from '../destaque/destaque.component';

import { UsuarioServiceService } from 'src/app/service/usuario-service.service';
import { NoticiaService } from '../service/noticia.service';
import { LogoTopoComponent } from './logo-topo/logo-topo.component';
import { StarComponent } from './star/star.component';
import { LojaComponent } from './loja/loja.component';

// import { NavegacaoComponent } from '../navegacao/navegacao.component';
// import { NgxModalModule } from '@ngx-lite/modal';

@NgModule({
  declarations: [
    // NavegacaoComponent,DestaqueComponent
    DestaqueComponent,
    HomeViewComponent,
    ContainerHomeComponent,
    SlideHomeComponent,
    EstruturaGridComponent,
    LateralSlideComponent,
    BaixoSlideComponent,
    NoticiasComponent,
    FormEntrarComponent,
    FormCadastroComponent,
    FormRemoverUserComponent,
    FormAtualizarUserComponent,
    FormAddNoticiaComponent,
    LogoTopoComponent,
    StarComponent,
    LojaComponent
  ],
  imports: [
    // NgxModalModule,
    EditorModule,
    NgxAnimationsModule,
    InputTextareaModule,
    CalendarModule,
    CascadeSelectModule,
    TableModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    MenubarModule,
    NgxSmartModalModule.forRoot(),
    DialogModule
  ],
  exports: [
    EstruturaGridComponent, FormEntrarComponent, FormCadastroComponent, FormRemoverUserComponent,FormAddNoticiaComponent,
    FormAtualizarUserComponent
  ],
  providers: [UsuarioServiceService, NoticiaService]
})
export class HomePageModule {

  constructor() {

  }

 }
