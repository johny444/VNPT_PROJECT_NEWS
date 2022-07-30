import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/share/News/news.service';
import { ArticleService } from 'src/app/share/tinBai/article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  form!: FormGroup
  submitted = false;
  tinbaiByID: any = {}

  tinbai!: any
  id = this.actRoute.snapshot.params['id'];
  constructor(private fb: FormBuilder, private api: ArticleService,
    public actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tentinbai: ["",
        Validators.compose([
          Validators.required,
        ])
      ],
      matinbai: ['',
        Validators.compose([
          Validators.required
        ])

      ],
      ngayKhoiTao: [''],
      moTa: [''],

    })



    this.getCMByID()
    this.getCM()
  }
  onSubmit(): void {


  }
  get FormControl() {
    return this.form.controls
  }
  getCMByID() {
    this.api.gettinbaiById(this.id).subscribe((data: {}) => {
      this.tinbaiByID = data
      console.log(this.tinbaiByID)
    })
  }
  getCM() {
    this.api.gettinbai().subscribe(res => {
      this.tinbai = res

    })
  }
  // UpdateCM(){


  //     this.api.updatetinbai(this.id,this.form.value).subscribe(res=>{
  //       alert("Cập Nhật Thành Công")
  //       this.router.navigate(['/article'])

  //     }
  //     )

  // }
  DeleteCM(ID: any) {

    if (window.confirm("“Bạn có chắc chắn muốn xoá tin bài này?")) {
      alert("Đã xoá thành công tin bài")
      this.api.deletearticle(ID).subscribe(res => {
        this.getCM()
      })
      this.router.navigate(["article"])
    }

  }

}