import { ApiService } from './../../../share/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  categoryData!: any;
  searchCategoryData!: any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getCategoryDetail();
  }
  getCategoryDetail() {
    this.api.getCategory()
      .subscribe(res => {
        this.categoryData = res;
        this.searchCategoryData = res;
      })
  }
}
