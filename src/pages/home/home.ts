import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { CalendarPage } from '../calendar/calendar';
import { MatchPage } from '../match/match';
import { MatchDirectPage } from '../matchDirect/matchDirect';
import { Match } from '../../providers/match';
import { Player } from '../../providers/player';
import { Change } from '../../providers/change';
import { Goal } from '../../providers/goal';
import { ParserBDDProvider } from '../../providers/parserbdd';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ///Utils
  listMatch: Array<Match> = new Array<Match>();         //Liste des matchs récupérée depuis le Json
  listPlayerDB: Array<Player> = new Array<Player>();
  color: string = "equality";
  colorCode: string = "#424242";


  match1: Match;
  match2: Match;

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


  //Goal
  goal1: Goal;
  goal2: Goal;
  goal3: Goal;



  constructor(public navCtrl: NavController, public parserbdd: ParserBDDProvider) {
    this.listPlayerDB = this.parserbdd.getAllPlayers();

    this.match1 = new Match();
    this.match2 = new Match();

    ///Players
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
    this.player4.id = '4';
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


    ///GOAL
    //Goal 1
    this.goal1 = new Goal();
    this.goal1.isFor = true;
    this.goal1.playerPass = this.player4;
    this.goal1.playerScore = this.player3;
    this.goal1.time = 465;

    //Goal 2
    this.goal2 = new Goal();
    this.goal2.isFor = false;
    this.goal2.time = 2569;

    //Goal 3
    this.goal3 = new Goal();
    this.goal3.isFor = true;
    this.goal3.playerPass = this.player4;
    this.goal3.playerScore = this.player5;
    this.goal3.time = 4953;



    ///CHANGES
    //Change 1
    this.change1 = new Change();
    this.change1.playerIn = this.player5;
    this.change1.playerOut = this.player1;
    this.change1.isFor = true;
    this.change1.time = 1125;

    //Change 2
    this.change2 = new Change();
    this.change2.playerIn = this.player6;
    this.change2.playerOut = this.player3;
    this.change2.isFor = true;
    this.change2.time = 2012;
        
    //Change 3
    this.change3 = new Change();
    this.change3.isFor = false;
    this.change3.time = 3645;

    //Change 4
    this.change4 = new Change();
    this.change4.isFor = false;
    this.change4.time = 5015;

    //Change 5 
    this.change5 = new Change();
    this.change5.isFor = true;
    this.change5.playerIn = this.player3;
    this.change5.playerOut = this.player2;
    this.change5.time = 5236;



    //MATCH
    //Match 1
    this.match1.team1 = "Ifs";
    this.match1.team2 = "CS Changé";
    this.match1.date = "Dimanche 7 mai";
    this.match1.heure = "15h00";
    this.match1.scoreTeam1 = 1;
    this.match1.scoreTeam2 = 2;
    this.match1.isDomicile = false;

    //Players on match sheet
    this.match1.listPlayer.push(this.player1);
    this.match1.listPlayer.push(this.player2);
    this.match1.listPlayer.push(this.player3);
    this.match1.listPlayer.push(this.player4);
    this.match1.listPlayer.push(this.player5);
    this.match1.listPlayer.push(this.player6);


    //Ajout des buts à la liste des buts
    this.match1.listGoal.push(this.goal1);
    this.match1.listGoal.push(this.goal2);
    this.match1.listGoal.push(this.goal3);


    //Ajout des changements à la liste des changements
    this.match1.listChange.push(this.change1);
    this.match1.listChange.push(this.change2);
    this.match1.listChange.push(this.change3);
    this.match1.listChange.push(this.change4);
    this.match1.listChange.push(this.change5);



    //Match 2
    this.match2.team1 = "CS Changé";
    this.match2.team2 = "Le Mans FC";
    this.match2.date = "Dimanche 14 mai";
    this.match2.heure = "15h00";
    this.match2.isDomicile = true;

    this.changeColor(this.match1);
    
  }

  /**
   * Permet de changer la couleur d'affichage du score
   */
  ///victoire : vert
  ///défaite : rouge
  ///égalité : gris
  changeColor(match: Match){
    if(match.isDomicile){
      if(match.scoreTeam1 > match.scoreTeam2){
        this.color = "victory";
        this.colorCode = "#088A08";
      }
      else if(match.scoreTeam1 < match.scoreTeam2){
        this.color = "danger";
        this.colorCode = "#f53d3d";
      }
      else{
        this.color = "equality";
        this.colorCode = "#424242";
      }
    }
    else{
      if(match.scoreTeam1 > match.scoreTeam2){
        this.color = "danger";
        this.colorCode = "#f53d3d";
      }
      else if(match.scoreTeam1 < match.scoreTeam2){
        this.color = "victory";
        this.colorCode = "#088A08";
      }
      else{
        this.color = "equality";
        this.colorCode = "#424242";
      }
    }
  }

  onClickAllMatch(){
    this.navCtrl.push(CalendarPage);
  }

  onClickMatch(match :Match){
    this.navCtrl.push(MatchPage, {match: match});
  }

  onClickMatchDirect(listPlayer: Array<Player>){
    console.log('listPlayerDB home :', this.listPlayerDB);
    this.navCtrl.push(MatchDirectPage);
  }
}
