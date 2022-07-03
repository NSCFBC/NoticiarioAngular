import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-form-add-noticia',
  templateUrl: './form-add-noticia.component.html',
  styleUrls: ['./form-add-noticia.component.css']
})
export class FormAddNoticiaComponent implements OnInit {
  noticiaForm: FormGroup = new FormGroup({});
  noticia: Noticia = new Noticia();
  formato: string = "";


  categorias: any = [];
  option: any;
  date: Date = new Date();
  @Input() clicou: boolean = false;

  constructor(private fb: FormBuilder, private noticiaSerivce: NoticiaService) {

  }

  mudarCategoria(option: any){
    console.log(option);
  }
  ngOnInit(): void {

    this.categorias = [
      { cname: 'Tecnologia', id: '' },
      { cname: 'Games', id: '' },
      { cname: 'Saúde', id: '' },
      { cname: 'Esporte', id: '' },
      { cname: 'Entretenimento', id: '' },
    ];


    this.noticiaForm = this.fb.group({
      titulo: [''],
      subtitulo: [''],
      conteudo: ['']
    })
  }


  adicionarUser() {
    let data = new Date();
    let dataString = data.getFullYear() + "-" + (data.getMonth() + 1).toString().padStart(2, "0") + "-" + data.getDate().toString().padStart(2, "0");
    // console.log(dataString);


    this.noticia = Object.assign({}, this.noticia, this.noticiaForm.value);
    this.noticia.dataNoticia = dataString;
    //pesquisar se tem no banco de dados
    this.noticia.categoria.id = "100";
    //pesquisar se tem no banco de dados
    this.noticia.usuario.id = "107";
    //armaze0nar no bd 0em bas0e 64
    this.noticia.caminhoImagem = "/assets/img011.jpg";

    this.formato = JSON.stringify(this.noticia);
    // console.log(this.formato);
    // console.log(this.noticia);
    this.noticiaSerivce.insertNoticia(this.formato);

  }

}
