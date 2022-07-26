import { ApiService } from './../../../share/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // dữ liệu toàn bộ các bài viết
  postsData!: any;
  // dữ liệu 3 bài mới nhất
  newPostsData!: any;
  // 3 bài của chuyên mục bất kì
  postsFromCategory!: any;
  // tên của chuyên mục bất kỳ đó
  randCategory!: any;
  // 3 bài viết nhiều lượt xem
  eyesPosts: any[] = []
  // 3 chuyên mục mới nhất
  randomCategory!: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPostsDetail();
    this.getCategoryDetail();
  }

  getPostsDetail() {
    this.api.getPosts()
      .subscribe(res => {
        this.postsData = res;
        this.newPostsData = this.postsData.slice(-3);
        this.randCategory = this.postsData[Math.floor(Math.random() * this.postsData.length)];
        this.postsFromCategory = this.postsData.filter(
          (a: any) => a.tenChuyenMuc == this.randCategory.tenChuyenMuc).slice(-3);
        this.eyesPosts = this.postsData.sort((a: any, b: any) => a.luotXem - b.luotXem);
        this.eyesPosts = this.eyesPosts.slice(-3);
      })
  }
  getCategoryDetail() {
    this.api.getCategory()
      .subscribe(res => {
        this.randomCategory = res.map((x: any) => x.tenChuyenMuc).slice(-3);
      })
  }
  authorPost(nguoiDang: any) {
    this.api.authorPost.next(nguoiDang);
  }
  postByCategory(tenChuyenMuc:any){
    this.api.postByCategory.next(tenChuyenMuc);
  }
}
