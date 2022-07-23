import { ApiService } from './../../../share/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newPosts = {
    id: 1,
    tieuDe: "Structural Analysis Engineer",
    nguoiDang: "Dell Hammelberg",
    ngayDang: "6/10/2022",
    luotXem: 800,
    maChuyenMuc: "50436-3145"
  }
  // dữ liệu toàn bộ các bài viết
  postsData!: any;
  // dữ liệu 3 bài mới nhất
  newPostsData!: any;
  // 3 bài bất kì
  postsFromCategory!: any;
  // 3 bài viết nhiều lượt xem
  eyesPosts:any[]=[]
  // 3 chuyên mục mới nhất
  randomCategory!:any;

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
        this.postsFromCategory = this.postsData.slice(0,3);
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
}
