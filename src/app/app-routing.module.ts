import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'surgeries',
        loadChildren: () => import('./modules/surgeries/surgeries.module').then(m => m.SurgeriesModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./modules/training/news.module').then(m => m.NewsModule)
      },
      {
        path: 'workshops',
        loadChildren: () => import('./modules/workshops/workshops.module').then(m => m.WorkshopsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
