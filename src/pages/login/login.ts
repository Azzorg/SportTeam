import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private myData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      console.log("username troll : " + formData.value.username);
      this.myData = formData.value;
      this.navCtrl.setRoot(HomePage);
    }
  }

  onClickSignIn(){
    console.log("Click register");
    this.navCtrl.push(RegisterPage);
  }
}
