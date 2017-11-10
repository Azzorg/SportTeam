import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Player } from '../../providers/player';


@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  player: Player;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get("player");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Player');
  }

}
