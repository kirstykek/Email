import { Component, OnInit } from '@angular/core';

import{UserService} from '../user.service'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email
password
  constructor(public userService:UserService, public alert: AlertController) { }

  ngOnInit() {
  }
login(){
this.userService.login(this.email,this.password);
}
async resertPassword(){
  const alert = await this.alert.create({
    header: 'Prompt!',
    inputs: [
      {
        name: 'email',
        type: 'email',
        placeholder: 'enter email'
      }],
   
      buttons: [
        {
          text: 'send',
         handler: (email) => {
          console.log(email.email)
           this.userService.resetPasword(email.email)
          ;}
          }, {
            text:"cancel",
            handler:()=>{
              
            }
          }]
});
await alert.present();
}
}
