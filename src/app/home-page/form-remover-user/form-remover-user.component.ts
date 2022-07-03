import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-remover-user',
  templateUrl: './form-remover-user.component.html',
  styleUrls: ['./form-remover-user.component.css']
})
export class FormRemoverUserComponent implements OnInit {

  @Input() clicou: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
