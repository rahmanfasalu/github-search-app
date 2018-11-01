import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                request = request.clone({ headers: request.headers.set('Accept', 'application/vnd.github.mercy-preview+json') });
                request = request.clone({ headers: request.headers.set('Authorization', 'token b58b54cb20cdede5e409008eba12cab272fab78e') });
        
        return next.handle(request);
    }
}