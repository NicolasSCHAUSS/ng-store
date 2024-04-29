import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ArticleDetailsComponent } from './component/article-details/article-details.component';
import { CaddyComponent } from './component/caddy/caddy.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'article/:id', component: ArticleDetailsComponent},
  {path:'caddy', component: CaddyComponent},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo:"home"}
];
