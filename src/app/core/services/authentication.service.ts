import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/models/user.model';
import { RootInjectorGuard } from '../guards/root-injector.guard';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends RootInjectorGuard{
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ){
        super(AuthenticationService);
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }
    register(user: User){
        return this.http.post<any>(`${environment.apiUrl}/user/register`, user);
    }

    login(user: User, isRemember) {
        console.log("is-rememer: "+isRemember)
        return this.http.post<any>(`${environment.apiUrl}/user/login`, user)
            .pipe(map((user) => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                if(!isRemember){
                    localStorage.setItem('expired', (Date.now() + (1000 * 60 * 60 * 2)).toString());
                }
                this.userSubject.next(user);
                return user;
            }));   
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        if(localStorage.getItem('expired'))
            localStorage.removeItem('expired');
        this.userSubject.next(null);
        this.router.navigate(['auth/login']);
    }
}