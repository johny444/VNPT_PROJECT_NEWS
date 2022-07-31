import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../share/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  categoryData!: any;
  categoryCodeData!: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getCategoryDetail();

  }
  getCategoryDetail() {
    this.api.getCategory()
      .subscribe(res => {
        this.categoryData = res;
        this.categoryCodeData = this.categoryData.map((x:any)=>x.maChuyenMuc);
        console.log(this.categoryCodeData)
      })
  }

}
