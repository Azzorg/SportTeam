import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Match } from '../../providers/match';

/**
 * Generated class for the Match page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  match: Match = new Match();
  color: string = "equality";
  colorCode: string = "#424242";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = this.navParams.get("match");
    this.changeColor();
  }

  /**
   * Permet de changer la couleur d'affichage du score
   */
  ///victoire : vert
  ///défaite : rouge
  ///égalité : gris
  changeColor(){
    if(this.match.isDomicile){
      if(this.match.scoreTeam1 > this.match.scoreTeam2){
        this.color = "victory";
        this.colorCode = "#088A08";
      }
      else if(this.match.scoreTeam1 < this.match.scoreTeam2){
        this.color = "danger";
        this.colorCode = "#f53d3d";
      }
      else{
        this.color = "equality";
        this.colorCode = "#424242";
      }
    }
    else{
      if(this.match.scoreTeam1 > this.match.scoreTeam2){
        this.color = "danger";
        this.colorCode = "#f53d3d";
      }
      else if(this.match.scoreTeam1 < this.match.scoreTeam2){
        this.color = "victory";
        this.colorCode = "#088A08";
      }
      else{
        this.color = "equality";
        this.colorCode = "#424242";
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Match');
  }

}
