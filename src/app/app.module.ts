import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule, FormsModule,
        HttpClientModule, InfiniteScrollModule,
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