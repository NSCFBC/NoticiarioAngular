import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-atualizar-user',
  templateUrl: './form-atualizar-user.component.html',
  styleUrls: ['./form-atualizar-user.component.css']
})
export class FormAtualizarUserComponent implements OnInit {

  @Input() clicou: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
