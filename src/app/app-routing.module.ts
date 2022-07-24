import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/category/add/add.component';
import { ViewComponent } from './component/category/view/view.component';
import { AuthorPostComponent } from './component/user/author-post/author-post.component';
import { HomeComponent } from './component/user/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  // trang chủ
  {path:'home', component: HomeComponent},
  // bài viết tác giả
  {path:'authorpost', component: AuthorPostComponent},
  // ?
  {path:'posts', component: ViewComponent},
  // trang danh sách chuyên mục
  {path:'category', component: ViewComponent},
  // trang danh sách tin bài
  {path:'article', component: ViewComponent},
  // trang thêm chuyên mục
  {path:'category/add', component: AddComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
