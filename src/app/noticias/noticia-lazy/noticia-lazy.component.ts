import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-noticia-lazy',
  templateUrl: './noticia-lazy.component.html',
  styleUrls: ['./noticia-lazy.component.css']
})
export class NoticiaLazyComponent implements OnInit, AfterViewInit {
  noticias: any;
  noticia: any = [];
  showStandard: boolean = false;
  display: boolean = false;

  constructor(private noticiaService: NoticiaService, private toastr: ToastrService) { }
  ngAfterViewInit(): void {
    this.noticiaService.getNoticias().subscribe(data => {
      // console.log("dados carregados");
      // console.log(data);
      this.noticias = data;
      // console.log("dados carregados");
    });
  }
  showDialog(noticia : any) {
    this.display = !this.display;
    this.noticia = noticia;
    // console.log("sjdsaipd");
    // console.log(this.noticia);
  }

  ngOnInit(): void {
    this.display = false;

  }

  listar() {
    this.noticiaService.getNoticias().subscribe(data => {
      this.noticias = data;
    })
  }

  deletar(id: number): void {
    // console.log("implementando delete noticia");
    // console.log("ids " + id);

    this.noticiaService.delete(id).subscribe(data => {
      this.listar();
      this.toastr.success('Noticia removida com sucesso!', 'Sucesso!');
    }, error =>{
      this.toastr.error('Erro ao remover noticia!', 'Erro!');
    });
  }

}
