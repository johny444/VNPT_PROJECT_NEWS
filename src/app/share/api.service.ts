import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http:HttpClient) {}
  getCategory(){
    return this.http.get<any>("http://localhost:3003/category")
    .pipe(map((res:any)=>res))
  }
  getPosts(){
    return this.http.get<any>("http://localhost:3003/posts")
    .pipe(map((res:any)=>res))
  }
  putEmployee(data:any, id:number){
    return this.http.put<any>("http://localhost:3003/posts/"+id,data)
    .pipe(map((res:any)=>res))
  }
  deleteCategory(id:number){
    return this.http.delete<any>("http://localhost:3003/category/"+id)
    .pipe(map((res:any)=>res))
  }
}