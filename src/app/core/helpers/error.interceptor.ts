import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '@app/core/services/authentication.service';
import { RootInjectorGuard } from '../guards/root-injector.guard';

@Injectable()
export class ErrorInterceptor extends RootInjectorGuard implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { 
        super(ErrorInterceptor);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
            }
            const error = err.error || err.statusText;
            return throwError(error);
        }))
    }
}