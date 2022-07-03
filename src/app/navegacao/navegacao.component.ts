import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';

import { MenuItem } from 'primeng/api';

import { Usuario } from 'src/app/model/usuario';

import { NoticiaService } from 'src/app/service/noticia.service';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';
import { LoginServiceService } from '../service/login-service.service';
@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit, AfterViewInit {
  noticiasAll: any = [];
  fatiado: any = [];
  @ViewChild(TemplateRef, { static: false }) tpl: TemplateRef<any> | undefined;



  user: Usuario = new Usuario();
  formato: string = "";
  cadastroForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private userSerivce: UsuarioServiceService,
    private noticiaService: NoticiaService, private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    private loginServiceService: LoginServiceService) {
    // simple text content
    // this.ngxSmartModalService.create('myModal1', 'content').open();

    // component
    // this.ngxSmartModalService.create('myModal2', MyComponent).open();

    // or templateRef
    // this.ngxSmartModalService.create('myModal3', this.tpl).open();

     }

  ngAfterViewInit(): void {
    this.noticiaService.getNoticias().subscribe(data => {
      // console.log(data);
      this.noticiasAll = data;
      // console.log(this.noticiasAll.length);
      this.fatiado = this.noticiasAll.slice(0,3);
    });

    this.ngxSmartModalService.getModal('videoModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      // console.log('Rickroll modal opened!', modal);
    });

  }
  abrir(){
    this.ngxSmartModalService.getModal('videoModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      // console.log('Rickroll modal opened!', modal);
    });
  }

  valorClick: boolean = false;
  valorCadastro: boolean = false;
  valueRemoveForm: boolean = false;
  valueAtualizaForm: boolean = false;
  addNoticia: boolean = false;

  items: MenuItem[] = [];
  adicionarUser() {
    // console.log(this.cadastroForm.value.nome);
    // console.log(this.cadastroForm.value.email);
    // console.log(this.cadastroForm.value.senha);
    this.user = Object.assign({}, this.user, this.cadastroForm.value);
    this.formato = JSON.stringify(this.cadastroForm.value);
    // console.log(this.formato);
    // this.userSerivce.insertUser(this.formato);
    // const uses = this.userSerivce.getUsers();
    // console.log(uses);
    this.userSerivce.insertUser(this.formato);
  }
  alterarModal() {

  }
  ngOnInit() {

    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      senha: ['']
    })


    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-user',
        routerLink: ['']
      },
      {
        label: 'Noticias',
        icon: 'pi pi-fw pi-file',
        items: [
          { label: 'Destaques', icon: 'pi pi-fw pi-star' ,
            command: (event) => {
              // this.router.navigateByUrl("noticia/destaque");
              // this.router.navigate(['/noticia/', 'destaque'])
              this.redirectTo('noticia/destaque');
            }
          },
          { label: 'Cidade', icon: 'pi pi-fw pi-bell',
          command: (event) => {
            // this.router.navigateByUrl("noticia/destaque");
            // this.router.navigate(['/noticia/', 'destaque'])
            this.redirectTo('noticia/Cidade');
            }
          },

          {
            label: 'Música', icon: 'pi pi-fw pi-volume-up',
            command: (event) => {
              // this.router.navigate(['/noticia/', 'Musica'])
              // this.router.navigateByUrl("noticia/Musica");
              this.redirectTo('noticia/Musica');
            }
          },
          { label: 'Esporte', icon: 'pi pi-fw pi-heart',
          command: (event) => {
            // this.router.navigateByUrl("noticia/destaque");
            // this.router.navigate(['/noticia/', 'destaque'])
            this.redirectTo('noticia/Esporte');
          } },
          { label: 'Educação', icon: 'pi pi-fw pi-book',
          command: (event) => {
            // this.router.navigateByUrl("noticia/destaque");
            // this.router.navigate(['/noticia/', 'destaque'])
            this.redirectTo('noticia/Educacao');
            }
          },
        ]
      },
      {
        label: 'Usuário',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Pesquisar',
            icon: 'pi pi-fw pi-search',
            routerLink: '/users'
          },
        {
          label: 'Remover',
          icon: 'pi pi-fw pi-trash',
          command: (event) => {
            this.mudarPropriedadeRemoverUser();
          }
        },
        {
          label: 'Meu Perfil',
          icon: 'pi pi-fw pi-pencil',
          command: (event) => {
            this.mudarPropriedadeMeuPerfil();
          }
        },
        {
          label: 'Atualizar',
          icon: 'pi pi-fw pi-pencil',
          command: (event) => {
            this.mudarPropriedadeAtuliza();
          }
        }
        ]
      },
      {
        label: 'Noticia',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Adicionar', icon: 'pi pi-fw pi-book', routerLink:'/addNoticias'
          },
          { label: 'Pesquisar', icon: 'pi pi-fw pi-search', routerLink:'/noticias' },
          { label: 'Atualizar', icon: 'pi pi-fw pi-pencil' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' }
        ]
      },
      {
        label: 'Cadastrar-se',
        icon: 'pi pi-fw pi-file',
        visible: !this.loginServiceService.userLogado(),
        command: (event) => {
          this.ngxSmartModalService.getModal('modalCadastro').open();
        }
      },
      {
        label: 'Entrar',
        icon: 'pi pi-fw pi-user',
        visible: !this.loginServiceService.userLogado(),
        command: (event) => {
          // console.log("Modal entrar ok");
          // console.log(this.valorClick);
          this.ngxSmartModalService.getModal('modalEntrar').open();
          // console.log("Modal entrar ok");
        },
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-sign-out',
        routerLink: '/home',
        visible: this.loginServiceService.userLogado(),

        routerLinkActiveOptions: true,
        command: (event) => {
          this.logout();
          this.router.navigate(['/home'])
          .then(() => {
               window.location.reload();
           });
        },
      },
    ];



  }



  title = 'mvcAngular';
  token: any;
  displayModal: boolean = false;

  displayBasic: boolean = false;

  displayBasic2: boolean = false;

  displayMaximizable: boolean = false;

  displayPosition: boolean = false;

  position: string = "";

  mudarPropriedadeMeuPerfil() {

  }
  mudarPropriedadeAtuliza() {
    this.valueAtualizaForm = !this.valueAtualizaForm;
  }

  mudarPropriedadeRemoverUser() {
    this.valueRemoveForm = !this.valueRemoveForm;
  }


  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  logout() {
    localStorage.clear();

    // this.display = false;
    // this.router.navigateByUrl("");
    this.router.navigate(['']);

  }

  usuarioLogado() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }
}
