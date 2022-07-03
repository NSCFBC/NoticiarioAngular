import { LgLoginGuard } from '../canActivate/lg-login.guard';
import { RoutingComponent } from './routing/routing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { FormEditComponent } from './form-edit/form-edit.component';

import { EditUserResolveService } from '../service/edit-user-resolve.service';
import { PermissaoGuard } from '../canActivate/permissao.guard';

const routes: Routes = [
  {
    path: '', component: RoutingComponent,
    data: {
      permissao: 'ROLE_ADMIN'
    },
    canActivate : [LgLoginGuard, PermissaoGuard],
    children: [
      { path: '', component: UsersComponent},
      { path: 'delete/:id', component: UsersComponent },
      {
        path: 'editar/:id', component: FormEditComponent,
        resolve:
        {
          usuario: EditUserResolveService
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
