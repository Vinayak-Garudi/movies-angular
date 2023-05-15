import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'auth', title: 'Authentication', component: LoginComponent },
  { path: 'movies', title: 'Movies', component: MoviesComponent },
  {
    path: 'users', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(mod => {
      return (mod.LazyLoadingModule)
    })
  },
  {
    path: 'lazy', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(mod => {
      return (mod.LazyLoadingModule)
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
