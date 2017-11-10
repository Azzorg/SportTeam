import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { Http, HttpModule } from '@angular/http';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CalendarPage } from '../pages/calendar/calendar';
import { MatchPage } from '../pages/match/match';
import { EffectifPage } from '../pages/effectif/effectif'; 
import { PlayerPage } from '../pages/player/player';
import { MatchDirectPage } from '../pages/matchDirect/matchDirect';
import { AddPlayerPage } from '../pages/addPlayer/addPlayer';
import { AddMatchPage } from '../pages/addMatch/addMatch';

//Pipes
import { Time } from '../pipes/time';


//Providers
import { Player } from '../providers/player';
import { Match } from '../providers/match'; 
import { Goal } from '../providers/goal';
import { Change } from '../providers/change';
import { ParserJson } from '../providers/parserJson';
import { File } from '@ionic-native/file';
import { ParserBDDProvider } from '../providers/parserbdd';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    MatchPage,
    CalendarPage,
    EffectifPage,
    PlayerPage,
    MatchDirectPage,
    Time,
    AddPlayerPage,
    AddMatchPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    CalendarPage,
    MatchPage,
    EffectifPage,
    PlayerPage,
    MatchDirectPage,
    AddPlayerPage,
    AddMatchPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Player,
    Match,
    Goal,
    Change,
    ParserJson,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParserBDDProvider
  ]
})
export class AppModule {}
