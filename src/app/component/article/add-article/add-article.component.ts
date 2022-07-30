import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/share/News/news.service';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/share/tinBai/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  form!: FormGroup
  submitted = false;
  tinbai:any={
    id:1,
    tentinbai:"",
    matinbai:"",
    moTa:"",
    tinbaiCha:""
  }
  tinbaiCha!:any
  constructor(private fb: FormBuilder,private api:ArticleService,public router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tentinbai:["",
        Validators.compose([
          Validators.required,
        ])
      ],
      matinbai:['',
        Validators.compose([
          Validators.required
        ])  
      ],
      ngayKhoiTao:[''],
      moTa:[''],
      tinbaiCha:['']

   })
   this.getCM()    
  }
  get FormControl(){
    return this.form.controls
  }
  getCM(){
    this.api.gettinbai().subscribe(res=>{
          this.tinbaiCha=res
    })
  }
  createCM(){
    if(this.form.valid){
      this.api.createtinbai(this.form.value).subscribe(res=>{
        alert('Tạo Danh Mục Thành Công');
        this.form.reset()
        this.router.navigate(["article"])
      })
    }
}

}
