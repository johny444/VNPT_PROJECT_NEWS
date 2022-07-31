import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './viewArticle.component.html',
  styleUrls: ['./viewArticle.component.css']
})
export class ViewArticleComponent implements OnInit {

  onArticle = {
    id:0,
    TieuDe: "",
    ChuyenMuc: "",
    ngayKhoiTao: ""
  };

  searchArticle = {
    TieuDe: "",
    ChuyenMuc: "",
    tuNgayKhoiTao: "",
    denNgayKhoiTao: ""
  };

  ArticleData!: any;
  searchArticleData!: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getArticleDetail();
  }
  getArticleDetail() {
    this.api.getCategory()
      .subscribe(res => {
        this.ArticleData = res;
        this.searchArticleData = res;
      })
  }
  deleteArticleDetail(idCategory:number) {
    this.api.deleteCategory(idCategory)
      .subscribe(res => {
        this.getArticleDetail();
      })
  }


  // searchh() {
  //   this.searchArticleData = this.ArticlData.filter((post: any) => {
  //     if (this.searchArticl.tenChuyenMuc === '' ||
  //       post.ChuyenMuc.toLowerCase().includes(this.searchArticl.ChuyenMuc.toLowerCase())) {
  //       return post;
  //     }
  //     return null;
  //   })
  // }
  // searchh2() {
  //   this.searchArticlData = this.ArticlData.filter((post: any) => {
  //     let date1 = new Date(post.ngayKhoiTao);
  //     let date2 = new Date(this.searchCategory.tuNgayKhoiTao);
  //     if (!Number.isFinite(date2.getTime()) || date1.getTime() > date2.getTime()) {
  //       return post;
  //     }
  //     return null;
  //   })
  // }
  // searchh3() {
  //   this.searchArticlData = this.ArticlData.filter((post: any) => {
  //     let date1 = new Date(post.ngayKhoiTao);
  //     let date3 = new Date(this.searchArticl.denNgayKhoiTao);
  //     if (!Number.isFinite(date3.getTime()) || date1.getTime() < date3.getTime()) {
  //       return post;
  //     }
  //     return null;
  //   })
  // }

  searchh4() {
    console.log(this.searchArticle.tuNgayKhoiTao)
    let searchTen: any[] = [];
    let searchTuNgay: any[] = [];
    let searchDenNgay: any[] = [];

    this.ArticleData.forEach((post: any) => {
      if (this.searchArticle.TieuDe === '' ||
        post.ChuyenMuc.toLowerCase().includes(this.searchArticle.TieuDe.toLowerCase())) {
        searchTen.push(post);
      }

      let date1 = new Date(post.ngayKhoiTao);
      let date2 = new Date(this.searchArticle.tuNgayKhoiTao);
      if (!Number.isFinite(date2.getTime()) || date1.getTime() > date2.getTime()) {
        searchTuNgay.push(post);
      }

      let date3 = new Date(this.searchArticle.denNgayKhoiTao);
      if (!Number.isFinite(date3.getTime()) || date1.getTime() < date3.getTime()) {
        searchDenNgay.push(post);
      }
    })
    let arr = this.unique([...searchTen, ...searchTuNgay])
    this.searchArticleData = this.unique([...arr, ...searchDenNgay]);
  }
  unique(arr: any[]) {
    var formArr = arr.sort((a: { id: number; }, b: { id: number; }) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    var idArr: any[] = [];
    var resultArr = [];
    for (let i = 1; i < formArr.length; i++) {
      if (formArr[i].id == formArr[i - 1].id
        && !idArr.includes(formArr[i].id)) {
        idArr.push(formArr[i].id);
        resultArr.push(formArr[i])
      }
    }
    return resultArr
  }
}
