import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedIn = new BehaviorSubject<boolean>(true);
  currentLoggedIn = this.loggedIn.asObservable()
  public loggedOut = new BehaviorSubject<boolean>(false);
  currentLoggedOut = this.loggedOut.asObservable()
  public dropdown = new BehaviorSubject<boolean>(false);
  currentdropdown = this.dropdown.asObservable()
  // newww
  _accounter = new BehaviorSubject<User>({
    id: 0,
    username: "",
    email: "",
    password: ""
  });
  current_accounter = this._accounter.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  Register(Regis: any) {
    return this.http.post<any>("http://localhost:3003/Users", Regis)
  }
  // newww
  Signin(USER: User) {
    this.http.get<any>("http://localhost:3003/Users").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === USER.username && a.password === USER.password;
      })
      if (user) {
        alert('Login Successful')
        this.loggedIn.next(false);
        this.loggedOut.next(true)
        this.dropdown.next(true)
        this._accounter.next(user)
        // this.signInForm.reset()
        this.router.navigate(["article"])
        return;
      } else {
        alert("user not found or Incorrect password")
      }
    })
  }
  // newww
  putUser(data: any, id: number) {
    return this.http.put<any>("http://localhost:3003/Users/" + id, data)
      .pipe(map((res: any) => res))
  }
}
