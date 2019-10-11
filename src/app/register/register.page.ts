import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
name
password
email
  constructor(public userService:UserService) { }

  ngOnInit() {
  }
register()
{
  this.userService.signup(this.email,this.password,this.name)
}
}
