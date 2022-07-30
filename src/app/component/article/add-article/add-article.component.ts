import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/share/News/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  form!: FormGroup
  submitted = false;
  chuyenmuc:any={
    id:1,
    tenChuyenMuc:"",
    maChuyenMuc:"",
    moTa:"",
    chuyenMucCha:""
  }
  chuyenMucCha!:any
  constructor(private fb: FormBuilder,private api:NewsService,public router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tenChuyenMuc:["",
        Validators.compose([
          Validators.required,
        ])
      ],
      maChuyenMuc:['',
        Validators.compose([
          Validators.required
        ])
    
      ],
      ngayKhoiTao:[''],
      moTa:[''],
      chuyenMucCha:['']

   })
   this.getCM()

    
  }



  get FormControl(){
    return this.form.controls
  }
  getCM(){
    this.api.getChuyenmuc().subscribe(res=>{
          this.chuyenMucCha=res
    })
  }
  createCM(){
    if(this.form.valid){
      this.api.createChuyenmuc(this.form.value).subscribe(res=>{
        alert('Tạo Danh Mục Thành Công');
        this.form.reset()
        this.router.navigate(["category"])
      })
    }
}

}
