import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/category/add/add.component';
import { ViewComponent } from './component/category/view/view.component';

const routes: Routes = [
  {path:'', redirectTo:'category', pathMatch:'full'},
  {path:'category', component: ViewComponent},
  {path:'article', component: ViewComponent},
  {path:'category/add', component: AddComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
