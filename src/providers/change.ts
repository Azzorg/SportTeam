import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Player } from '../providers/player';

@Injectable()
export class Change {

  playerIn: Player;
  playerOut: Player;
  time: number;
  isFor: boolean; 
  comment: string;

  constructor() {
    console.log('Hello Change Provider');
  }

}
