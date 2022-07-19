import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './component/category/view/view.component';

const routes: Routes = [
  {path:'', redirectTo:'category', pathMatch:'full'},
  {path:'category', component: ViewComponent},
  {path:'article', component: ViewComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
