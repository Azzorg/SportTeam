import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Player } from '../providers/player';
import { Goal } from '../providers/goal';
import { Change } from '../providers/change';

@Injectable()
export class Match {

  //Description of a match
  id: string;
  date: string;
  heure: string;
  team1: string;       //Équipe domicile
  team2: string;       //Équipe visiteur
  scoreTeam1: number;
  scoreTeam2: number;
  isDomicile: boolean;
  listPlayer: Array<Player> = new Array<Player>();            //Feuille de match : tous les joueurs pouvant jouer le match
  listPlayerOnField: Array<Player> = new Array<Player>();     //Joueurs présents sur le terrain
  listGoal: Array<Goal> = new Array<Goal>();               //Liste des buts 
  listChange : Array<Change> = new Array<Change>();           //Liste des changements
  comment: string;





  constructor() {
    this.scoreTeam1 = 0;
    this.scoreTeam2 = 0;
  }

}
