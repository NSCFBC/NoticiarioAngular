import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { fromEvent, merge, Observable } from 'rxjs';
import { CustomValidators } from 'ng2-validation';
import { ToastrService } from 'ngx-toastr';

import { Usuario } from 'src/app/model/usuario';

import { DisplayMessage, GenericValidator } from 'src/app/validator/generic-form-validation';

import { UsuarioServiceService } from 'src/app/service/usuario-service.service';
@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit, AfterViewInit{
  user: Usuario = new Usuario();
  formato: string = "";

  cadastroForm: FormGroup = new FormGroup({});

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];
  // value7: any;
  formResult: string = '';
  displayMessage: DisplayMessage = {};
  genericValidator: GenericValidator = new GenericValidator();
  clicou: boolean = false;

  constructor(private fb: FormBuilder, private userSerivce: UsuarioServiceService,
    private toastr: ToastrService, private route: ActivatedRoute) { }

    ngAfterViewInit(): void {
      let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

      merge(...controlBlurs).subscribe(() => {
        this.displayMessage = this.genericValidator.processMessages(this.cadastroForm);
      });
    }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['',  [Validators.required, CustomValidators.rangeLength([3, 40])]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, CustomValidators.rangeLength([6, 12])]]
    })
    // console.log("dados caar");
    this.user = this.route.snapshot.data['usuario'];
    // console.log( this.user);
    // console.log(this.route.params['usuario'])
  }


  adicionarUser() {
    // console.log(this.cadastroForm.value.nome);
    // console.log(this.cadastroForm.value.email);
    // console.log(this.cadastroForm.value.senha);
    // this.user = Object.assign({}, this.user, this.cadastroForm.value);
    // this.formato = JSON.stringify(this.cadastroForm.value);
    // console.log(this.formato);
    // this.userSerivce.insertUser(this.formato);
    // const uses = this.userSerivce.getUsers();
    // console.log(uses);
    console.log("user atualiza");
    // console.log(this.user);
    // this.user.token = localStorage.getItem("token");
    this.formato = JSON.stringify(this.user);
    console.log(this.formato);
    this.userSerivce.insertUser(this.formato).subscribe(data => {
      console.log("user atualizado");
      console.log(data);
    });
    // this.cadastroForm = new FormGroup({});
    this.toastr.success('Cadastro editado com sucesso!', 'Sucesso!');
  }

}
