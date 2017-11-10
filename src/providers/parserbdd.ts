import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Player } from './player';
import { Match } from './match';
import { Parse } from 'parse';

/*
  Generated class for the ParserbddProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ParserBDDProvider {
  private parseServerUrl: string = "https://parseapi.back4app.com/";

  constructor(public http: Http) {
    this.parseInitialize();
  }

  parseInitialize(){
    Parse.initialize("9Hnb5EJxDyfk6EfNJLFsbbf991whQH7Pl3ZmbhKs","XYASLoVvxmNPnlWBCrPHmvR8hdSTS7OL1oHKkj2f");
    Parse.serverURL = this.parseServerUrl;
  }


  /******************** PLAYER ***********************/

  /** Insert new player inside the database */
  addPlayer(newPlayer){
    const PlayerD = Parse.Object.extend("Player");
    let player = new PlayerD();
    player.set("firstname", newPlayer.firstname);
    player.set("surname", newPlayer.surname);
    player.set("birthDate", newPlayer.birthDate);
    player.set("nbMatch", newPlayer.nbMatch);
    player.set("nbGoal", newPlayer.nbGoal);
    player.set("nbPass", newPlayer.nbPass);
    player.set("nbYellowCard", newPlayer.nbYellowCard);
    player.set("nbRedCard", newPlayer.nbRedCard);
    player.set("timePlayed", newPlayer.timePlayed);

    console.log("Player BDD :", player);

    player.save();

  }

  /** Get all players from database */
  private getAllPlayersFromDB():Promise<any>{
    console.log("in get players");
    return new Promise((resolve,reject) => {
       const Player = Parse.Object.extend("Player");
       let query = new Parse.Query(Player);
       console.log("found class")
       query.find().then(function(results){
         resolve(results);
         }, (error) => {
         reject(error);
       });
    });
  }

  /** Return all players in a list of players */
  getAllPlayers():Array<Player>{
    let player;
    let listP: Array<Player> = new Array<Player>();
    this.getAllPlayersFromDB().then(
      (result)=>{
        for(let i = 0; i < result.length; i++){
          player = new Player();
          player.id = result[i].id;
          player.firstname = result[i].get('firstname');
          player.surname = result[i].get('surname');
          player.birthDate = result[i].get('birthDate');
          player.nbMatch = result[i].get('nbMatch');
          player.nbGoal = result[i].get('nbGoal');
          player.nbPass = result[i].get('nbPass');
          player.nbYellowCard = result[i].get('nbYellowCard');
          player.nbRedCard = result[i].get('nbRedCard');
          player.timePlayed = result[i].get('timePlayed');

          listP.push(player);
        }
      }
    );
    console.log("List Player database :", listP);
    return listP;
  }





  /****************************** MATCH ******************************/
  
  /** Insert new match inside the database */
  addMatch(newMatch){
    const MatchD = Parse.Object.extend("Match");
    let match = new MatchD();
    match.set("team1", newMatch.team1);
    match.set("team2", newMatch.team2);
    match.set("scoreTeam1", newMatch.scoreTeam1);
    match.set("scoreTeam2", newMatch.scoreTeam2);
    match.set("date", newMatch.date);
    match.set("isDomicile", newMatch.isDomicile);
    match.set("comment", newMatch.comment);
    match.set("listPlayer", newMatch.listPlayer);
    match.set("listPlayerOnField", newMatch.listPlayerOnField);
    match.set("listChange", newMatch.listChange);
    match.set("listGoal", newMatch.listGoal);

    console.log("Match inside db done :", match);
    match.save();
  }

  /** Get all matchs from database */
  private getAllMatchsFromDB():Promise<any>{
    console.log("in get match");
    return new Promise((resolve,reject) => {
       const Match = Parse.Object.extend("Match");
       let query = new Parse.Query(Match);
       console.log("found class")
       query.find().then(function(results){
         resolve(results);
         }, (error) => {
         reject(error);
       });
    });
  }

  /** Return all matchs in a list of matchs */
  getAllMatchs():Array<Match>{
    let match;
    let listM: Array<Match> = new Array<Match>();
    this.getAllMatchsFromDB().then(
      (result)=>{
        for(let i = 0; i < result.length; i++){
          match = new Match();
          match.id = result[i].id;
          match.date = result[i].get('date');
          match.heure = result[i].get('heure');
          match.team1 = result[i].get('team1');
          match.team2 = result[i].get('team2');
          match.scoreTeam1 = result[i].get('scoreTeam1');
          match.scoreTeam2 = result[i].get('scoreTeam2');
          match.isDomicile = result[i].get('isDomicile');
          match.listPlayer = result[i].get('listPlayer');
          match.listPlayerOnField = result[i].get('listPlayerOnField');
          match.listGoal = result[i].get('listGoal');
          match.listChange = result[i].get('listChange');
          match.comment = result[i].get('comment');

          listM.push(match);
        }
      }
    );
    console.log("List match database :", listM);
    return listM;
  }

  /** Update a match with the match put in parameter */
  updateMatch(newMatch){
    const MatchD = Parse.Object.extend("Match");
    let match = new MatchD();
    match.set("objectId", newMatch.id);
    match.set("team1", newMatch.team1);
    match.set("team2", newMatch.team2);
    match.set("scoreTeam1", newMatch.scoreTeam1);
    match.set("scoreTeam2", newMatch.scoreTeam2);
    match.set("date", newMatch.date);
    match.set("isDomicile", newMatch.isDomicile);
    match.set("comment", newMatch.comment);
    match.set("listPlayer", newMatch.listPlayer);
    match.set("listPlayerOnField", newMatch.listPlayerOnField);
    match.set("listChange", newMatch.listChange);
    match.set("listGoal", newMatch.listGoal);

    console.log("Match inside db done :", match);
    match.save(); 
  }



}
