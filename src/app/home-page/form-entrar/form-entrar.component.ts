import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-form-entrar',
  templateUrl: './form-entrar.component.html',
  styleUrls: ['./form-entrar.component.css']
})
export class FormEntrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  formResult: string = '';
  cadastroForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private loginService: LoginServiceService) { }

  ngOnInit(): void {
    // this.cadastroForm = this.fb.group({
    //   email: [''],
    //   senha: ['']
    // });
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, CustomValidators.rangeLength([6, 12])]]
    })
  }

  login() {
    // if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    // alert(this.usuario.login);
    // console.log("Usuario LOgin no sistema");
    // console.log(this.usuario);
    this.loginService.login(this.usuario);


    // }
  }
}
