import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { RoutingComponent } from './routing/routing.component';
import { UsersComponent } from './users/users.component';
import { FormEditComponent } from './form-edit/form-edit.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    RoutingComponent,
    UsersComponent,
    FormEditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
