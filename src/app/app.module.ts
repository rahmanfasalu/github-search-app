import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor, MessageService, HttpErrorHandler } from './_helpers';
import { AlertService, AuthenticationService, UserService, RepoService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';



/*
 ********************************************************************************************
                                    AppModule
 ********************************************************************************************
 @description:Application root module, set of directives and pipes and other common module imported here
 @import:
 BrowserModule - For to Configures a browser-based application to transition from a server-rendered app
 ReactiveFormsModule - For adding Reactive form component
 FormsModule - For adding tempplate based form module
 HttpClientModule - for http request handling
 InfiniteScrollModule  -  for infinte scroll in the search page, it will trigger when we scroll based on the configuration
 NgHttpLoaderModule  - for preloader through out the application
 routing  - Application global routing

 ********************************************************************************************
                                    AppModule  - Component Declaration
 ********************************************************************************************

 AppComponent  - Application root component, this is the entry point to the application
 AlertComponent  - For showing alert messages, not using as of now for the application flow
 HomeComponent - This is the home search page, where we can search user and repo details also we can do infinite scroll for loading more
 LoginComponen - just a login page, no functonility added, any username or pass will accept.
 UserComponent - specefic component for single user info.
 RepoComponent - specefic component for single repo  info

********************************************************************************************
                                    AppModule  - Providers
********************************************************************************************
 AuthGuard - For Auth services in the application route
 AlertService - For to show/hide alert messages, not using of now
 AuthenticationService  - Application login service, just configured it will accept any user name and pass as of now
 UserService  -  For user specefic service call
 RepoService  -  For repo specefic service call
 HTTP_INTERCEPTORS : JwtInterceptor - bypasss http call to set jwt token and header
 HTTP_INTERCEPTORS : ErrorInterceptor  - - bypasss http call for error interceptor. we can configure 404 and other errors
 HttpErrorHandler, MessageService - for application specefic error handling
 */



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule, FormsModule,
        HttpClientModule, InfiniteScrollModule,NgHttpLoaderModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        UserComponent,
        RepoComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService, RepoService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        HttpErrorHandler,
        MessageService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    // tslint:disable-next-line:eofline
}