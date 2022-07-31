import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './addArticle.component.html',
  styleUrls: ['./addArticle.component.css']
})
export class AddArticleComponent implements OnInit {

 ArticleData!: any;
 ArticleCodeData!: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getArticleDetail();

  }
  getArticleDetail() {
    this.api.getCategory()
      .subscribe(res => {
        this.ArticleData = res;
        this.ArticleCodeData = this.ArticleData.map((x:any)=>x.maChuyenMuc);
        console.log(this.ArticleCodeData)
      })
  }

}

