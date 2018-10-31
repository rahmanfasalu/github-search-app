import { RepoComponent } from './repo/repo.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user/:id', component: UserComponent },
    { path: 'repo/:id', component: RepoComponent },
    { path: '**', redirectTo: 'login' },
];

export const routing = RouterModule.forRoot(appRoutes);