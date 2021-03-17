import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreweryComponent } from './brewery/brewery.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'brew', component: BreweryComponent},
  
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
