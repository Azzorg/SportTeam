import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Player provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Player {

  //Description of a player  
  id: string;             
  firstname: string;
  surname: string;
  birthDate: string;
  nbMatch: number;
  nbGoal: number;
  nbPass: number;
  nbYellowCard: number;
  nbRedCard: number;
  timePlayed: number;     //Minutes

  constructor() {
  }

}
