import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string):Observable<any> {
        
        localStorage.setItem('currentUser', JSON.stringify(username));
        return of(username);
        /* Actual code should be like this  */
        /*
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
        })); */
    }

    logout() {
        // remove user from local storage to log user out
       // localStorage.removeItem('currentUser');
    }
}