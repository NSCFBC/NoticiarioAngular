import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, merge, Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioServiceService } from 'src/app/service/usuario-service.service';
import { DisplayMessage, GenericValidator } from 'src/app/validator/generic-form-validation';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit, AfterViewInit{
  user: Usuario = new Usuario();
  formato: string = "";
  cadastroForm: FormGroup = new FormGroup({});

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];
  // value7: any;
  formResult: string = '';
  displayMessage: DisplayMessage = {};
  genericValidator: GenericValidator = new GenericValidator();

  constructor(private fb: FormBuilder, private userSerivce: UsuarioServiceService,
    private toastr: ToastrService) { }

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
  }

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
    this.userSerivce.insertUser(this.formato).subscribe(data => {
      this.toastr.success('Cadastro realizado com sucesso!', 'Seja bem vindo!',
      {"timeOut": 1500, "extendedTimeOut": 1000, "closeButton": true,  "progressBar": true});
    }, error => {
      this.toastr.error(error.error.detail, 'Erro!');
      // console.log("error deletar");
      // console.log(error.error);
    });


    // this.cadastroForm = new FormGroup({});
    // this.toastr.success('Cadastro realizado com sucesso!', 'Seja bem vindo!');

  }

}
