import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Player } from '../../providers/player';
import { EffectifPage } from '../effectif/effectif';
import { ParserBDDProvider } from '../../providers/parserbdd';

@Component({
  selector: 'page-addPlayer',
  templateUrl: 'addPlayer.html',
})
export class AddPlayerPage {

  player: Player = new Player();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public parserBDD: ParserBDDProvider) {

  }

  onSubmit(formData){
    //if(formData.value.firstname == null || formData.value.surname == null || formData.value.birthdate == null ) this.showAlertNotFull();
    //else{
      //Récupération des données dans le form
      //this.player.id = formData.value.id;
      this.player.firstname = formData.value.firstname;
      this.player.surname = formData.value.surname;
      this.player.birthDate = formData.value.birthDate;
      this.player.nbGoal = 0;
      this.player.nbMatch = 0;
      this.player.nbPass = 0;
      this.player.nbRedCard = 0;
      this.player.nbYellowCard = 0;
      this.player.timePlayed = 0;

      console.log("firstname :", this.player.firstname);
      console.log("surname :", this.player.surname);
      console.log("birthdate :", this.player.birthDate);

      //Ajout à la base de données
      this.parserBDD.addPlayer(this.player);

      //Retour à la page de l'effectif
      this.navCtrl.setRoot(EffectifPage);
    //}
  }

  showAlertNotFull(){
    let alertGoal = this.alertCtrl.create({
      title: 'Un champ vide',
      message: "Veuillez remplir tous les champs",
      buttons: ['Ok']
    });
    alertGoal.present();
  }

}
