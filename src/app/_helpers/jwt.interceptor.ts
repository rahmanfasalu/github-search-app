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
              
              /* 
                github is limited access, for test please replace the following accees token with your personal access token 
                ie : replace : af78fea730cd5451e85985bca359be748d6f85ba  with your token 

                for generating token go to 

                https://github.com/settings/tokens/new

                then check all permission, then generate token. 
                copy the token and replace here. after that uncomment the following line  
                */


            // request = request.clone({ headers: request.headers.set('Authorization', 'token af78fea730cd5451e85985bca359be748d6f85ba') });  
              
              
        
        return next.handle(request);
    }
}