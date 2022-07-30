import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiURL = 'http://localhost:3003'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  gettinbai() {
    return this.http.get(this.apiURL + 'post')
  }
  gettinbaiById(id: any) {
    return this.http.get(this.apiURL + 'post/' + id)
      .pipe(retry(1), catchError(this.handleError));

  }
  updatetinbai(id: any, tinbai: any) {
    return this.http.put(
      this.apiURL + 'post/' + id,
      tinbai
    )
      .pipe(retry(1), catchError(this.handleError));

  }
  createtinbai(tinbai:any){
    return this.http.post<any>(this.apiURL+'post',tinbai)
  }

  deletearticle(id:number){
    return this.http.delete<any>(this.apiURL+"post/"+id)  
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
