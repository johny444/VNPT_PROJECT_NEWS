import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/template/nav/nav.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './component/category/view/view.component';
import { HomeComponent } from './component/user/home/home.component';
import { RouterModule } from '@angular/router';
import { ViewArticleComponent } from './component/article/viewArticle/viewArticle.component';
import { AddComponent } from './component/category/add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorPostComponent } from './component/user/author-post/author-post.component';
import { PostsByCategoryComponent } from './component/user/posts-by-category/posts-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ViewComponent,
    HomeComponent,
    ViewArticleComponent,
    AddComponent,
    AuthorPostComponent,
    PostsByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
