import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http:HttpClient) {}
  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3003/posts",data)
    .pipe(map((res:any)=>res))
  }
  getCategory(){
    return this.http.get<any>("http://localhost:3003/category")
    .pipe(map((res:any)=>res))
  }
  putEmployee(data:any, id:number){
    return this.http.put<any>("http://localhost:3003/posts/"+id,data)
    .pipe(map((res:any)=>res))  
  }
  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3003/posts/"+id)
    .pipe(map((res:any)=>res))
  }

  postJob(data:any){
    return this.http.post<any>("http://localhost:3003/comments",data)
    .pipe(map((res:any)=>res))
  }
  getJob(){
    return this.http.get<any>("http://localhost:3003/comments")
    .pipe(map((res:any)=>res))
  }
  deleteJob(id:number){
    return this.http.delete<any>("http://localhost:3003/comments/"+id)
    .pipe(map((res:any)=>res))
  }
}
