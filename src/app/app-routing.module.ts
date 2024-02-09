import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"login",
  },
  {
    path:"login",
    loadChildren: () => import('./login/login.module').then(m =>m.LoginModule)
  },
  {
    path:"dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then(m =>m.DashboardModule)
  },
  {
    path: 'products',
    component: ProductComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
