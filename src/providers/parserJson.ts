import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Player } from '../providers/player';
import { Match } from '../providers/match';
import { Change } from '../providers/change';
import { Goal } from '../providers/goal';
import 'rxjs/add/operator/toPromise';
import { File } from '@ionic-native/file';

@Injectable()
export class ParserJson {
  listPlayer: Array<Player>;

  listMatch: Array<Match>;

  constructor(public http: Http) {
    console.log('Hello ParserJson Provider');
  }

  /** Récupération de la liste de joueur */
  getPlayers() : Player[]{
    this.listPlayer = new Array<Player>();
	  this.http.get('assets/players.json')
	  .map((res) => res.json())
	  .subscribe(data =>{
		  this.addPlayersToList(data);
	  });

    console.log("List player from json :", this.listPlayer);

    return this.listPlayer;
  }
  
  /** Ajout des joueurs du Json dans la liste */
  addPlayersToList(players){
    let player;

	  for(let playerFromJson of players) {
      player = new Player();
		  //player.id = playerFromJson.id;
		  player.firstname = playerFromJson.firstname;
		  player.surname = playerFromJson.surname;
		  player.birthDate = playerFromJson.birthDate;
		  player.nbGoal = playerFromJson.nbGoal;
		  player.nbMatch = playerFromJson.nbMatch;
		  player.nbPass = playerFromJson.nbPass;
		  player.nbRedCard = playerFromJson.nbRedCard;
		  player.nbYellowCard = playerFromJson.nbYellowCard;
		  player.timePlayed = playerFromJson.timePlayed;

      console.log("player from json :", player);

      this.listPlayer.push(player);		  
	  }
  }

  /** Récupération des matchs du Json */
  getMatchs() : Match[]{
    this.listMatch  = new Array<Match>();
	  this.http.get('assets/matchs.json')
	  .map((res) => res.json())
	  .subscribe(data =>{
		  this.addPlayersToList(data);
	  });

    console.log("List player from json :", this.listMatch);

    return this.listMatch;
  }
  
  /** Ajout des matchs du Json dans la liste */
  addMatchsToList(matchs){
    let match;

	  for(let macthFromJson of matchs) {
      match = new Match();
		  match.id = macthFromJson.id;
		  match.team1 = macthFromJson.team1;
		  match.team2 = macthFromJson.team2;
		  match.date = macthFromJson.date;
		  match.heure = macthFromJson.heure;
		  match.scoreTeam1 = macthFromJson.scoreTeam1;
		  match.scoreTeam2 = macthFromJson.scoreTeam2;
		  match.isDomicile = macthFromJson.isDomicile;
		  match.comment = macthFromJson.comment;
      match.listChange = this.getListChanges(macthFromJson.listChange);
      match.listGoal = this.getListGoals(macthFromJson.listGoal); 
      match.listPlayer = this.getListPlayers(macthFromJson.listPlayer)
      match.listPlayerOnField = this.getListPlayers(macthFromJson.listPlayerOnField);

      console.log("player from json :", match);

      this.listMatch.push(match);		  
	  }
  }

  /** Ajout des changements dans la liste de changements */
  getListChanges(listChangeFromJson):Change[]{
    let listChange = new Array<Change>();
    let change;

    for(let changeFromJson of listChangeFromJson){
      change = new Change();

      change = new Goal();

      change.playerIn = changeFromJson.playerScore;
      change.playerOut = changeFromJson.playerPass;
      change.time = changeFromJson.time;
      change.isFor = changeFromJson.isFor;
      change.comment = changeFromJson.comment;

      console.log("Change from json :", change);

      listChange.push(change);
    }

    return listChange;
  }

  /** Ajout des buts dans la liste de buts */
  getListGoals(listGoalFromJson):Goal[]{
    let listGoal = new Array<Goal>();
    let goal;

    for(let goalFromJson of listGoalFromJson){
      goal = new Goal();

      goal.playerScore = goalFromJson.playerScore;
      goal.playerPass = goalFromJson.playerPass;
      goal.time = goalFromJson.time;
      goal.isFor = goalFromJson.isFor;
      goal.comment = goalFromJson.comment;

      console.log("Goal from json :", goal);

      listGoal.push(goal);
    }

    return listGoal;
  }

  /** Ajout des joueurs dans la liste de joueurs */
  getListPlayers(listPlayersFromJson):Player[]{
    let listPlayer = new Array<Player>();
    let player;
    
    for(let playerFromJson of listPlayersFromJson) {
      player = new Player();
		  //player.id = playerFromJson.id;
		  player.firstname = playerFromJson.firstname;
		  player.surname = playerFromJson.surname;
		  player.birthDate = playerFromJson.birthDate;
		  player.nbGoal = playerFromJson.nbGoal;
		  player.nbMatch = playerFromJson.nbMatch;
		  player.nbPass = playerFromJson.nbPass;
		  player.nbRedCard = playerFromJson.nbRedCard;
		  player.nbYellowCard = playerFromJson.nbYellowCard;
		  player.timePlayed = playerFromJson.timePlayed;

      console.log("player from json :", player);

      listPlayer.push(player);		  
	  }

    return listPlayer;
  }


  

}
