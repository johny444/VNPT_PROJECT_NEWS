import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/api.service';

@Component({
  selector: 'app-posts-by-category',
  templateUrl: './posts-by-category.component.html',
  styleUrls: ['./posts-by-category.component.css']
})
export class PostsByCategoryComponent implements OnInit {

  // dữ liệu toàn bộ các bài viết
  postsData!: any;
  // dữ liệu 5 bài mới nhất của tác giả
  newPostsData!: any;
  // 3 bài viết nhiều lượt xem
  eyesPosts:any[]=[]
  // 3 chuyên mục mới nhất
  randomCategory!:any;
  // tên chuyên mục
  categoryName!: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPostsDetail();
    this.getCategoryDetail();
    this.api.postByCategory.subscribe((val:any) =>{
      this.categoryName  = val;
    })
  }

  getPostsDetail() {
    this.api.getPosts()
      .subscribe(res => {
        this.postsData = res;
        this.newPostsData = this.postsData.filter((a:any)=>a.tenChuyenMuc == this.categoryName)
        this.newPostsData = this.newPostsData.slice(-5);
        this.eyesPosts = this.postsData.sort((a:any,b:any)=>a.luotXem-b.luotXem);
        this.eyesPosts = this.eyesPosts.slice(-3);
      })
    
  }
  getCategoryDetail() {
    this.api.getCategory()
      .subscribe(res => {
        this.randomCategory = res.map((x:any)=>x.tenChuyenMuc).slice(-3);
      })
  }

  authorPost(nguoiDang:any){
    this.api.authorPost.next(nguoiDang);
  }
}
