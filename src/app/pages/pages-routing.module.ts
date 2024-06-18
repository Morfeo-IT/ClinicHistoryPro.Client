import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CareModule } from './care/care.module';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent , 
    children: [
      { 
        path: 'care',  
        loadChildren: () => import('./care/care.module').then(m => m.CareModule)
      },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
