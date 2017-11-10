import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Player } from '../providers/player';

@Injectable()
export class Goal {

  //Description of a goal
  playerScore: Player;
  playerPass: Player;
  time: number;
  isFor: boolean;
  comment: string;


  constructor() {
    console.log('Hello Goal Provider');
  }

}
