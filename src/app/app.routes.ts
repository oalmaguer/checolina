import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PreviewComponent } from './preview/preview.component';
import { HttpClient } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'preview',
    component: PreviewComponent,
    providers: [HttpClient],
  },
  {
    path: 'success',
    component: SuccessComponent,
    providers: [HttpClient],
  },
];
