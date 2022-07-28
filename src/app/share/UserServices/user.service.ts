import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public isLogin = new BehaviorSubject<boolean>(false);
  // true là đã đăng nhập, false là chưa đăng nhập
  public loggedIn = new BehaviorSubject<boolean>(true);
  currentLoggedIn = this.loggedIn.asObservable()
  public loggedOut = new BehaviorSubject<boolean>(false);
  currentLoggedOut = this.loggedOut.asObservable()
  public dropdown = new BehaviorSubject<boolean>(false);
  currentdropdown = this.dropdown.asObservable()
  _name= new BehaviorSubject<string>('');
  current_name=this._name.asObservable();
  
  constructor(private http: HttpClient, private router: Router) { }

  getLogin(){
    return this.http.get<any>("http://localhost:3003/Users")
    .pipe(map((res:any)=>res))
  }

  Register(Regis: any) {
    return this.http.post<any>("http://localhost:3003/Users", Regis)
  }
  Signin(USER: User) {
    this.http.get<any>("http://localhost:3003/Users").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === USER.username && a.password === USER.password
      })
      if (user) {
        alert('Login Successful')
        this.loggedIn.next(false);
        this.loggedOut.next(true)
        this.dropdown.next(true)
        this._name.next(USER.username)
        // this.signInForm.reset()
        this.router.navigate(["article"])
        console.log("router",this.router.navigate)

        return;
      } else {
        alert("user not found or Incorrect password")
      }
    })

  }

}
