import { RepoComponent } from './repo/repo.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user/:login', component: UserComponent },
    { path: 'repo/:name', component: RepoComponent },
    { path: 'repo/:id/:owner/:name', component: RepoComponent },
    { path: '**', redirectTo: 'login' },
];

export const routing = RouterModule.forRoot(appRoutes);