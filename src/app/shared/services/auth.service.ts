import * as moment from 'moment';
import jwtDecode, {JwtPayload} from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../../models/user.model';
import {environment} from '../../../environments/environment';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        const url = environment.apiUrl +  '/authentication_token';
        return of(this.http.post<User>(url, {email, password}).subscribe( data => this.setSession(data)));
    }

    private setSession(authResult) {

        const jwtData = jwtDecode<JwtPayload>(authResult.token);
        const expiresAt = moment().add(jwtData.exp, 'second');

        localStorage.setItem('token', authResult.token);
        localStorage.setItem('token_exp', JSON.stringify(expiresAt.valueOf()));
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('token_exp');
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('token_exp');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
