import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './notFound/not-found/not-found.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';


import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {TabMenuModule} from 'primeng/tabmenu';
import { CatogoriaNoticiaComponent } from './catogoria-noticia/catogoria-noticia.component';
import { EstruturaGeralComponent } from './estrutura-geral/estrutura-geral.component';


import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NoticiaGenericComponent } from './noticia-generic/noticia-generic.component';
import {TableModule} from 'primeng/table';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { FooterComponent } from './footer/footer.component';
// NavegacaoComponent

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavegacaoComponent,
    NotFoundComponent,
    CatogoriaNoticiaComponent,
    // DestaqueComponent,
    EstruturaGeralComponent,
    NoticiaGenericComponent,
    FooterComponent
  ],
  imports: [

    HttpInterceptorModule,
    TableModule,
    NgxSpinnerModule,
    TabMenuModule,
    MenubarModule,
    HttpClientModule,
    BrowserModule,
    HomePageModule,
    ButtonModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
