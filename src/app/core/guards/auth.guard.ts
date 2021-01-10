import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service';
import { RootInjectorGuard } from './root-injector.guard';

/**
 * Prevent user to access other routes without login
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.userValue;
        const expired = localStorage.getItem('expired')
        if (user) {
            if(!expired? true : (Date.now() < +expired))
                return true;
            else{
                this.authenticationService.logout();
                return false;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}