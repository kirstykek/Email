import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  login(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then((result)=>{
      console.log("user is logged in")
    });
  }
  signup(email,password,name)
  {
    firebase.auth().createUserWithEmailAndPassword(email,password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then((result)=>{
      console.log("user has registered successfully")
    });
  }
  resetPasword(email){
    var auth = firebase.auth();
   
    auth.sendPasswordResetEmail(email).then(()=> {
      // Email sent.
    }).catch((error)=> {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("password resert")
    });
  }
  logout(){
    firebase.auth().signOut().then(()=> {
      // Sign-out successful.
      console.log(" Sign-out successful.")
    }).catch((error)=> {
      // An error happened.
      console.log(" An error happened")
    });
   
  }
}
