import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/category/add/add.component';
import { ViewComponent } from './component/category/view/view.component';
import { HomeComponent } from './component/user/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'posts', component: ViewComponent},
  {path:'category', component: ViewComponent},
  {path:'article', component: ViewComponent},
  {path:'category/add', component: AddComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
