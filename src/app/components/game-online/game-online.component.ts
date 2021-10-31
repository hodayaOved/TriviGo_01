import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSetting } from 'src/model/GameSetting';
import { player } from 'src/model/player';
import { interval, Subscription } from 'rxjs';
import { GameOnlineService } from 'src/app/services/game-online.service';

@Component({
  selector: 'app-game-online',
  templateUrl: './game-online.component.html',
  styleUrls: ['./game-online.component.scss'],

})
export class GameOnlineComponent implements OnInit {
  array = [
    {
      "Question":
        [

          { 0: "מי נקראה אשת הברזל" },
          { 1: "איילת שקד" },
          { 2: 'מירי רגב' },
          { 3: 'שרה נתניהו' }

        ],
    },
    {
      "Question":
        [
          { 0: "באיזה מדינה התרחשו 2 רעידות אדמה הגדולות בהסטוריה", },
          { 1: "יפן", },
          { 2: "סין", },
          { 3: "אמריקה", },

        ],
    },
    {
      "Question":
        [
          { 0: "מה לבבות יש לתמנון", },
          { 1: "9", },
          { 2: "3", },
          { 3: "1", },

        ],
    }
  ]
  constructor(private router: Router, private serviceGameOnline: GameOnlineService) {


  }
  FlageSignUpGameOnline = true


  h2="האונליין יחל בעוד"
  // count: number = 0;
  // players: player[] = []
  flageStart: boolean = false
  FlagExmpleGame: boolean = false

  x = 0; y = 0
  // Addanswer: number = 2;
  // Addquestion = 0;
  interval: any
  Time: number = 0;
  subscription: Subscription | undefined;
  minets: number = 0
  secent: number = 11
  StartGameTime: number = 0

  ngOnInit(): void {
    // this.flageStart=this.serviceGameOnline.FlagStartGameOnline
    this.serviceGameOnline.startGameOnline().subscribe(s => {
      this.StartGameTime = s;
      this.minets = Number.parseInt(s.toString())-1;
      this.secent = Number.parseInt(s.toString());
      this.secent = Number.parseInt(((s - Number.parseInt(s.toString())) * 100).toFixed());

      if (this.StartGameTime == 0) {
        if (this.flageStart == true)
          this.router.navigate(['StartGame', 0]);

      }

      const source = interval(1000);
      this.subscription = source.subscribe(val => {
        if (this.secent > 0)
          this.secent--;
          
        else
          if (this.minets > 0) {
            this.minets--;
            this.secent = 59;
          }
          else {
            console.log("ngOnDestroy"+this.serviceGameOnline.FlagStartGameOnline)
            if (this.flageStart == true)
              this.router.navigate(['StartGame', 0]);
            //this.serviceGameOnline.FlagStartGameOnline=true
            this.ngOnDestroy()
          }
      });
    }, err => console.log("jjj"))


  }

  ngOnDestroy() {
    
   
  }
  addGame() {
    debugger
    this.serviceGameOnline.FlagStartGameOnline == true
    this.flageStart=true;
    console.log(this.flageStart)

  }

  next() {
    this.x = this.x + 1;
  }

  before() {
    this.x = this.x - 1;
  }

  SignUpGameOnline() {
    // this.flageStart = false;
    this.FlageSignUpGameOnline = false;
    this.h2="משחק האונליין שנרשמת אליו יחל בעוד"
  }
  

}
