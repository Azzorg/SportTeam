import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Match } from '../../providers/match';
import { CalendarPage } from '../calendar/calendar';
import { Player } from '../../providers/player';
import { ParserBDDProvider } from '../../providers/parserbdd';

/**
 * Generated class for the AddMatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-addMatch',
  templateUrl: 'addMatch.html',
})
export class AddMatchPage {

  match: Match = new Match();
  isValid: boolean = false;

  //players: Array<string> = new Array<string>();

  listPlayer: Array <Player> = new Array<Player>();

  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
  player5: Player;
  player6: Player;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public parserDB: ParserBDDProvider) {

    this.listPlayer = this.parserDB.getAllPlayers();

    console.log('list player 549:', this.listPlayer);
    
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


    console.log("List player : " + this.listPlayer);


    //Add players to the list
    this.listPlayer.push(this.player1);
    this.listPlayer.push(this.player2);
    this.listPlayer.push(this.player3);
    this.listPlayer.push(this.player4);
    this.listPlayer.push(this.player5);
    this.listPlayer.push(this.player6);

    console.log('Fin :', 'Fin');*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMatchPage');
  }

  onSubmit(myForm){
    this.match = new Match();

    //Récupération des données du form
    this.match.team1 = myForm.value.team1;
    this.match.team2 = myForm.value.team2;
    this.match.date = myForm.value.date;
    this.match.heure = myForm.value.heure;

    let index1 = 0;
    let index2 = 0;
    console.log('Before tout');

    //récupération de la liste des joueurs
    for(let playerId of myForm.value.players){
      console.log('tour playerChe ' + index1)
      for(let play of this.listPlayer){
        console.log('tour play ' + index2)
        console.log('id Player ' + play)
        if(play.id == playerId) {
          this.match.listPlayer.push(play);
          console.log('joueur ajouté :', play);
          break;
        }
        index2++;
      }
      index1++;
    }

    console.log('list Player from add player :', this.listPlayer);

    console.log("list player add match :", this.match.listPlayer);

    //Récupération de la liste des joueurs sur le terrain
    this.showAlertOnField();
    

    //Initialisation du match
    this.match.scoreTeam1 = 0;
    this.match.scoreTeam2 = 0;


    
  }

  showAlertOnField(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Les titulaires : ');

    //Liste de tous les joueurs présents pour le match
    for(let player of this.match.listPlayer){
      console.log('player for :', player);
      alert.addInput({
        type: 'checkbox',
        label: player.firstname +  player.surname,
        value: player.id.toString(),
      });
    }

    alert.addButton('Retour');
    alert.addButton({
      text: 'Plus tard', 
      handler: data => {
        console.log('Checkbox data:', data);

        //Sauvegarde du match dans la base de données
        this.parserDB.addMatch(this.match);

        //Retour à la page du calendrier
        this.navCtrl.setRoot(CalendarPage);
      }
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Checkbox data:', data);
        //récupération des joueurs sélectionnés pour être titulaire
        for(let plId of data){
          console.log('ID player', plId);
          for(let play of this.listPlayer){
            if(play.id == plId){
              this.match.listPlayerOnField.push(play);
            }
          }
        }

        //Sauvegarde du match dans la base de données
        this.parserDB.addMatch(this.match);

        //Retour à la page du calendrier
        this.navCtrl.setRoot(CalendarPage);

      }
    });
    alert.present();
  }

  onClick(){
    console.log('list player :',this.match.listPlayer);
  }

}
