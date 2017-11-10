import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Player } from '../../providers/player';
import { PlayerPage } from '../player/player';
import { AddPlayerPage } from '../addPlayer/addPlayer';
import { ParserBDDProvider } from '../../providers/parserbdd';
import { Http } from '@angular/http';
import { File } from '@ionic-native/file';

/**
 * Generated class for the Effectif page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-effectif',
  templateUrl: 'effectif.html',
})
export class EffectifPage {


  listPlayer: Array <Player> = new Array<Player>();
  player: Player;

  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
  player5: Player;
  player6: Player;

  id: number;
  //lastPlayer: Player = new Player();
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public parserDB: ParserBDDProvider, public file: File) {

    //Récupération des joueurs inscrits dans le fichier json
    this.listPlayer = this.parserDB.getAllPlayers();

    //Player 1
    /*this.player1 = new Player(); 
    this.player1.id = 1;
    this.player1.firstname = "Anne";
    this.player1.surname = "Trotreau";
    this.player1.birthDate = "16/04/1988";
    this.player1.nbMatch = 12;
    this.player1.timePlayed = 953;
    this.player1.nbGoal = 3;
    this.player1.nbPass = 2;
    this.player1.nbYellowCard = 0;
    this.player1.nbRedCard = 0;

    console.log("Player 1 : " + this.player1);
    console.log("\tFirsname : " + this.player1.firstname);
    console.log("\tSurname : " + this.player1.surname);
    console.log("\tBirth Date : " + this.player1.birthDate);
    console.log("\tnb Match : " + this.player1.nbMatch);
    console.log("\tTime Played : " + this.player1.timePlayed);



    //Player 2
    this.player2 = new Player(); 
    this.player2.id = 2;
    this.player2.firstname = "Wendie";
    this.player2.surname = "Renard";
    this.player2.birthDate = "20/07/1990";
    this.player2.nbMatch = 12;
    this.player2.timePlayed = 953;
    this.player2.nbGoal = 3;
    this.player2.nbPass = 2;
    this.player2.nbYellowCard = 0;
    this.player2.nbRedCard = 0;

    console.log("Player 2 : " + this.player2);
    console.log("\tFirsname : " + this.player2.firstname);
    console.log("\tSurname : " + this.player2.surname);
    console.log("\tBirth Date : " + this.player2.birthDate);
    console.log("\tnb Match : " + this.player2.nbMatch);
    console.log("\tTime Played : " + this.player2.timePlayed);



    //Player 3
    this.player3 = new Player(); 
    this.player3.id = 3;
    this.player3.firstname = "Dzsenifer";
    this.player3.surname = "Marozsán";
    this.player3.birthDate = "18/04/1992";
    this.player3.nbMatch = 12;
    this.player3.timePlayed = 953;
    this.player3.nbGoal = 3;
    this.player3.nbPass = 2;
    this.player3.nbYellowCard = 0;
    this.player3.nbRedCard = 0;

    console.log("Player 3 : " + this.player3);
    console.log("\tFirsname : " + this.player3.firstname);
    console.log("\tSurname : " + this.player3.surname);
    console.log("\tBirth Date : " + this.player3.birthDate);
    console.log("\tnb Match : " + this.player3.nbMatch);
    console.log("\tTime Played : " + this.player3.timePlayed);



    //Player 4
    this.player4 = new Player(); 
    this.player4.id = 4;
    this.player4.firstname = "Engénie";
    this.player4.surname = "Le Sommer";
    this.player4.birthDate = "18/05/1989";
    this.player4.nbMatch = 12;
    this.player4.timePlayed = 953;
    this.player4.nbGoal = 3;
    this.player4.nbPass = 2;
    this.player4.nbYellowCard = 0;
    this.player4.nbRedCard = 0;

    console.log("Player 4 : " + this.player4);
    console.log("\tFirsname : " + this.player4.firstname);
    console.log("\tSurname : " + this.player4.surname);
    console.log("\tBirth Date : " + this.player4.birthDate);
    console.log("\tnb Match : " + this.player4.nbMatch);
    console.log("\tTime Played : " + this.player4.timePlayed);



    //Player 5
    this.player5 = new Player(); 
    this.player5.id = 5;
    this.player5.firstname = "Saki";
    this.player5.surname = "Kumagai";
    this.player5.birthDate = "17/10/1990";
    this.player5.nbMatch = 12;
    this.player5.timePlayed = 953;
    this.player5.nbGoal = 3;
    this.player5.nbPass = 2;
    this.player5.nbYellowCard = 0;
    this.player5.nbRedCard = 0;


    console.log("Player 5 : " + this.player5);
    console.log("\tFirsname : " + this.player5.firstname);
    console.log("\tSurname : " + this.player5.surname);
    console.log("\tBirth Date : " + this.player5.birthDate);
    console.log("\tnb Match : " + this.player5.nbMatch);
    console.log("\tTime Played : " + this.player5.timePlayed);



    //Player 6
    this.player6 = new Player(); 
    this.player6.id = 6;
    this.player6.firstname = "Camille";
    this.player6.surname = "Abily";
    this.player6.birthDate = "05/12/1984";
    this.player6.nbMatch = 12;
    this.player6.timePlayed = 953;
    this.player6.nbGoal = 3;
    this.player6.nbPass = 2;
    this.player6.nbYellowCard = 0;
    this.player6.nbRedCard = 0;

    console.log("Player 6 : " + this.player6);
    console.log("\tFirsname : " + this.player6.firstname);
    console.log("\tSurname : " + this.player6.surname);
    console.log("\tBirth Date : " + this.player6.birthDate);
    console.log("\tnb Match : " + this.player6.nbMatch);
    console.log("\tTime Played : " + this.player6.timePlayed);


    console.log("List player : " + this.listPlayer.toString);


    //Add players to the list
    this.listPlayer.push(this.player1);
    this.listPlayer.push(this.player2);
    this.listPlayer.push(this.player3);
    this.listPlayer.push(this.player4);
    this.listPlayer.push(this.player5);
    this.listPlayer.push(this.player6);

    console.log(this.listPlayer);*/

    //Récupération du nouveau joueur
   /* if(this.navParams.get("player") != null){
      
      this.player = new Player();
      this.player = this.navParams.get("player");

      console.log("player :",this.player);
      
      this.listPlayer.push(this.player);
      console.log("Array list player :", this.listPlayer);

      //Écriture dans le fichier Json
      let jFile = JSON.stringify(this.listPlayer);
      console.log("Json list player troll :", jFile);
      let file : File;
      file = new File();
      console.log(file.checkFile('./assets', 'players.json'));
      file.writeFile('./assets', 'players.json', jFile,{replace: true});
      //File.writeFile(File.externalRootDirectory, 'assets/players.json', jFile, true);
    }  */  
  }

  /** Fait appel au service pour récupérer les informations des joueurs */
  /*onGetPlayers(){
    this.listPlayer = this.parserDB.getPlayers();
  }*/

  /** Aller sur la page spécifique d'un joueur */
  onClickPlayer(player: Player){
    this.navCtrl.push(PlayerPage, {player: player});
  }

  /** Ajouter un nouveau joueur */
  onClickAddPlayer(){
    this.navCtrl.push(AddPlayerPage);
  }

}
