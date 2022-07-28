import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/share/UserServices/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  islogin!:boolean
  islogout!:boolean
  _dropdown!:boolean
  name!:string
  constructor( private Check:UserService) { }

  ngOnInit(): void {
    this.Check.currentLoggedIn.subscribe(res=>{
      this.islogin=res
      console.log("res login",this.islogin)
    })
    this.Check.currentLoggedOut.subscribe(res=>{
      this.islogout=res
      console.log("res logout",this.islogout)
    })
    this.Check.currentdropdown.subscribe(res=>{
      this._dropdown=res
      console.log("res logout",this._dropdown)
    })
    this.Check.current_name.subscribe(res=>{
      this.name=res
    })

  }
  Checklogin(){
    this.Check.loggedIn.next(false)
  }
  Checklogout(){
    this.Check.loggedOut.next(false)
    this.Check.dropdown.next(false)
    this.Check.loggedIn.next(true)
  }

}
