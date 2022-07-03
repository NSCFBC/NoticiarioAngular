import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LgLoginGuard implements CanActivate {
  constructor(private router: Router,private toastr: ToastrService,private loginService: LoginServiceService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (localStorage.getItem("token"))  {
        // alert('You are not allowed to view this page');
        //redirect to login/home page etc
        //return false to cancel the navigation
        return true;
      }
      let toast = this.toastr.error('Você deve efetuar login para acessar este recurso!!', 'Erro!',
      { "timeOut": 1500, "extendedTimeOut": 1000, "closeButton": true, "progressBar": true });

      if (toast) {
        toast.onHidden.subscribe(() => {
          // this.router.navigateByUrl('fazer');
          this.router.navigate(['/home']);
          // .then(() => {
          //      window.location.reload();
          //  });
        })
     }
    return false;
  }

}
