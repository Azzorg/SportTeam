import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Match } from '../../providers/match';
import { Player } from '../../providers/player';
import { Goal } from '../../providers/goal';
import { Change } from '../../providers/change';
import { Time } from '../../pipes/time';
import { ParserBDDProvider } from '../../providers/parserbdd';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-matchDirect',
  templateUrl: 'matchDirect.html',
})
export class MatchDirectPage {

  listPlayerDB: Array<Player> = new Array<Player>();

  isStarted: boolean = false;
  match: Match;
  color: string = "equality";
  seconde: number = 0 ;
  timeout: any;
  colorCode: string = "#424242";
  isBegun: boolean = false;

  //Goal part
  goalRadioResult;

  //Utils methods
  goal: Goal;
  playerGoal: Player;
  playerPass: Player;
  change: Change;
  playerIn: Player;
  playerOut: Player;

  //Player  
  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
  player5: Player;
  player6: Player;


  //Change
  change1 : Change;
  change2 : Change;
  change3 : Change;
  change4 : Change;
  change5 : Change;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public parserbdd: ParserBDDProvider, public loadingCtrl: LoadingController) {
    this.listPlayerDB = this.parserbdd.getAllPlayers();

    console.log('listPlayerDB :', this.listPlayerDB);

    this.match = new Match();

    this.presentLoading();

    //Player 1
    this.player1 = new Player(); 
    this.player1.id = '1';
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
    this.player2.id = '2';
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
    this.player3.id = '3';
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
    this.player4.id ='4';
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
    this.player5.id = '5';
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
    this.player6.id = '6';
    this.player6.firstname = "Camille";
    this.player6.surname = "Abily";
    this.player6.birthDate = "05/12/1984";
    this.player6.nbMatch = 12;
    this.player6.timePlayed = 953;
    this.player6.nbGoal = 3;
    this.player6.nbPass = 2;
    this.player6.nbYellowCard = 0;
    this.player6.nbRedCard = 0;


    //MATCH
    this.match.team1 = "CS Changé";
    this.match.team2 = "Le Mans FC";
    this.match.date = "Dimanche 14 mai";
    this.match.heure = "15h00";
    this.match.isDomicile = true;

    //Players on match sheet
    /*this.match.listPlayer.push(this.player1);
    this.match.listPlayer.push(this.player2);
    this.match.listPlayer.push(this.player3);
    this.match.listPlayer.push(this.player4);
    this.match.listPlayer.push(this.player5);
    this.match.listPlayer.push(this.player6);*/

    //Players on the field
    /*this.match.listPlayerOnField.push(this.player1);
    this.match.listPlayerOnField.push(this.player2);
    this.match.listPlayerOnField.push(this.player3);
    this.match.listPlayerOnField.push(this.player4);*/


    //Color of score
    this.changeColor();

    this.presentLoading();


  }

  /** Before start the game */
  onClickBegin(){
    //Vérifie qu'il y a bien des joueurs et parmi eux des titulaires
    if(this.match.listPlayerOnField.length == 0){
      if(this.match.listPlayer.length == 0) this.showAlertListPlayer();
      else this.showAlertListPlayerOnField();
    }
    this.isBegun = true;
  }

  /** Loading alert to wait */
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Un instant ...",
      duration: 3000
    });
    loader.present();
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

  /** Show an alert to choose players who participate to the match cause listPlayer is empty */
  showAlertListPlayer(){
    let alertListPlayer = this.alertCtrl.create();
    alertListPlayer.setTitle('La liste de joueur pour ce match est vide');

    //Affichage des joueurs présents dans la base de données
    for(let play of this.listPlayerDB){
      alertListPlayer.addInput({
        type: 'checkbox',
        label: play.firstname + " " + play.surname,
        value: play.id.toString()
      });
    }

    //Bouton continue -> choix du passeur
    alertListPlayer.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Player :', data);
        //récupération des joueurs sélectionnés pour être titulaire
        for(let plId of data){
          console.log('ID player', plId);
          for(let play of this.listPlayerDB){
            if(play.id == plId){
              this.match.listPlayer.push(play);
            }
          }
        }
        this.showAlertListPlayerOnField();
      }
    });

    alertListPlayer.present();
  }

  /** Show an alert to choose players on field cause listPlayerOnField is empty */
  showAlertListPlayerOnField(){
    let alertListPlayerOnField = this.alertCtrl.create();
    alertListPlayerOnField.setTitle('La liste de joueur pour ce match est vide');

    //Affichage des joueurs présents dans la base de données
    for(let play of this.match.listPlayer){
      alertListPlayerOnField.addInput({
        type: 'checkbox',
        label: play.firstname + " " + play.surname,
        value: play.id.toString()
      });
    }

    //Bouton continue -> choix du passeur
    alertListPlayerOnField.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Player :', data);
        //récupération des joueurs sélectionnés pour être titulaire
        for(let plId of data){
          console.log('ID player', plId);
          for(let play of this.match.listPlayer){
            if(play.id == plId){
              this.match.listPlayerOnField.push(play);
            }
          }
        }

      }
    });

    alertListPlayerOnField.present();
  }

  onClickStart(){
    this.isStarted = true;
    this.chrono();
  }

  onClickPause(){
    this.isStarted = false;
    clearTimeout(this.timeout);
  }

  chrono(){
    this.seconde++;
    this.timeout = setTimeout(()=>this.chrono(),1000);
  }

  onClickEndMatch(){
    //this.parserbdd.updateMatch(this.match);
    this.parserbdd.addMatch(this.match);
  }

  onClickGoal(){
    this.goal = new Goal();
    this.goal.time = this.seconde;
    let alertGoal = this.alertCtrl.create({
      title: 'But',
      message: "Est-ce un but pour ou contre",
      buttons: [
        {
          text: 'Pour',
          handler: data => {
            this.doGoalFor();
          }
        },
        {
          text: 'Adversaire',
          handler: data => {
            this.doGoalAgainst();
          }
        }
      ]
    });
    alertGoal.present();
  }

  onClickChange(){
    this.change = new Change();
    this.change.time = this.seconde;
    let alertChange = this.alertCtrl.create({
      title: 'Changement',
      message: "Est-ce un changement pour ou contre",
      buttons: [
        {
          text: 'Pour',
          handler: data => {
            this.doChangeOut();
          }
        },
        {
          text: 'Adversaire',
          handler: data => {
            console.log('Contre clicked');
            this.doChangeAgainst();
          }
        }
      ]
    });
    alertChange.present();
  }

  ///BUT
  //POUR
  /** Choix du buteur */
  doGoalFor() {
    let alertGoalFor = this.alertCtrl.create();
    alertGoalFor.setTitle('But pour');

    alertGoalFor.addInput({
      type: 'radio',
      label: 'Pas de buteur',
      value: 'none',
      checked: true
    });

    //Affichage des joueurs présents sur le terrain
    for(let playerGoal of this.match.listPlayerOnField){
      alertGoalFor.addInput({
        type: 'radio',
        label: playerGoal.firstname + " " + playerGoal.surname,
        value: playerGoal.id.toString()
      });
    }

    //Cancel button
    alertGoalFor.addButton({
      text: 'Cancel',
      handler: data => {
        this.onClickGoal();
      }
    });

    //Bouton continue -> choix du passeur
    alertGoalFor.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Player :', data);
        if(data != "none"){
          for(let player of this.match.listPlayerOnField){
            if(player.id == data){
              this.playerGoal = player;
              break;
            }
          }
        }
        else{
          this.playerGoal = null;
        }
        
        this.goal.isFor = true;
        this.goal.playerScore = this.playerGoal;

        //Choix du passeur
        this.doPass();
      }
    });

    alertGoalFor.present();
  }

  //Choix du passeur
  doPass(){
    let alertPassFor = this.alertCtrl.create();
    alertPassFor.setTitle('Passeur');

    alertPassFor.addInput({
      type: 'radio',
      label: 'Pas de passeur',
      value: 'none',
      checked: true
    });

    //Affichage des joueurs présents sur le terrain sauf du buteur
    for(let playerPass of this.match.listPlayerOnField){
      if(playerPass != this.playerGoal){
        alertPassFor.addInput({
          type: 'radio',
          label: playerPass.firstname + " " + playerPass.surname,
          value: playerPass.id.toString()
        });
      }
    }

    //Cancel button
    alertPassFor.addButton({
      text: 'Cancel',
      handler: data => {
        this.doGoalFor
      }
    });

    //Bouton continue -> choix du passeur
    alertPassFor.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Player :', data);
        if(data != "none"){
          for(let player of this.match.listPlayerOnField){
            if(player.firstname == data){
              this.playerPass = player;
              break;
            }
          }
        }
        else{
          this.playerPass = null;
        }
        
        this.goal.playerPass = this.playerPass;

        this.doCommentGoal();
      }
    });

    alertPassFor.present();
  }

  doCommentGoal(){
    let prompt = this.alertCtrl.create({
      title: 'Commentaire',
      message: "Écrire un commentaire sur le but",
      inputs: [
        {
          name: 'comment',
          placeholder: 'commentaire'
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('data :', data);
            this.goal.comment = data;
            this.match.listGoal.push(this.goal);
            //Ajustement du score
            if((this.match.isDomicile && this.goal.isFor) || (!this.match.isDomicile && !this.goal.isFor)){
              this.match.scoreTeam1++;
            }
            else{
              this.match.scoreTeam2++;
            }
            this.changeColor();
          }
        }
      ]
    });
    prompt.present();
  }

  //CONTRE
  doGoalAgainst(){
    this.goal.isFor = false;
    this.goal.playerPass = null;
    this.goal.playerScore = null;
    this.doCommentGoal();
  }


  ///CHANGEMENTS
  //POUR
  doChangeOut(){
    let alertChangeOut = this.alertCtrl.create();
    alertChangeOut.setTitle('Joueur sortant');
    this.playerOut = new Player();

    //Affichage des joueurs présents sur le terrain
    for(let playerOut of this.match.listPlayerOnField){
      alertChangeOut.addInput({
        type: 'radio',
        label: playerOut.firstname + " " + playerOut.surname,
        value: playerOut.id.toString()
      });
    }

    //Cancel button
    alertChangeOut.addButton({
      text: 'Cancel',
      handler: data => {
        this.onClickChange();
      }
    });

    //Bouton continue -> choix du joueur entrant
    alertChangeOut.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Player :', data);
        for(let player of this.match.listPlayerOnField){
          if(player.id == data){
            this.playerOut = player;
            break;
          }
        }
        console.log('PlayerOutCLass :', this.playerOut);
        
        this.change.isFor = true;
        this.change.playerOut = this.playerOut;
        console.log('PlayerOut change :', this.change.playerOut);

        //Choix du joueur entrant
        this.doChangeIn();
      }
    });

    alertChangeOut.present();
  }

  //Choix du joueur entrant
  doChangeIn(){
    this.playerIn = new Player(); 
    let alertChangeIn = this.alertCtrl.create();
    alertChangeIn.setTitle('Joueur entrant');

    //Affichage des joueurs présents sur le terrain
    for(let playerIn of this.match.listPlayer){
      let onField = false;
      for(let player of this.match.listPlayerOnField){
        if(player == playerIn){
          onField = true;
        }
      }
      if(!onField){
        alertChangeIn.addInput({
          type: 'radio',
          label: playerIn.firstname + " " + playerIn.surname,
          value: playerIn.id.toString()
        });
      }
    }

    //Cancel button
    alertChangeIn.addButton({
      text: 'Cancel',
      handler: data => {
        this.doChangeOut();
      }
    });

    
    alertChangeIn.addButton({
      text: 'Ok',
      handler: data => {
        let dataTab: string[] = data.split(' ');
        let firstN = dataTab[0];
        let surN = dataTab[1];
        console.log('Player :', data);
        for(let player of this.match.listPlayer){
          if(player.id == data){
            this.playerIn = player;
            break;
          }
        }
        console.log('PlayerInCLass :', this.playerIn);
        
        this.change.playerIn = this.playerIn;
        console.log('PlayerIn change :', this.change.playerIn)
        let index = 0;
        //Enlever le joueur sortant de la liste des joueurs présents sur le terrrain
        for(let player of this.match.listPlayerOnField){  
          if(player == this.playerOut){
            this.match.listPlayerOnField.splice(index, 1);
            break;
          }
          index++;
        }
        this.match.listPlayerOnField.push(this.playerIn);

        //Commentaire du changement
        this.doCommentChange();
      }
    });

    alertChangeIn.present();
  }

  //Commentaire du changement
  doCommentChange(){
    let prompt = this.alertCtrl.create({
      title: 'Commentaire',
      message: "Écrire un commentaire sur le changement",
      inputs: [
        {
          name: 'comment',
          placeholder: 'commentaire'
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('data :', data);
            this.change.comment = data;
            this.match.listChange.push(this.change);
          }
        }
      ]
    });
    prompt.present();
  }

  doChangeAgainst(){
    this.change.isFor = false;
    this.change.playerIn = null;
    this.change.playerOut = null;
    this.doCommentChange();
  }
}
