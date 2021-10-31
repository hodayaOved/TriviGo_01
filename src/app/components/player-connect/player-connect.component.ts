import { LiteralExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSettingsService } from 'src/app/services/game-settings.service';
import { PlayerService } from 'src/app/services/player.service';
import { QuizService } from 'src/app/services/quiz.service';
import { GameSetting } from 'src/model/GameSetting';
import { player } from 'src/model/player';
import { Quiz } from 'src/model/Quiz';
import { SystemComments } from 'src/model/SystemComments';
import { SystemCommentsService } from '../../services/system-comments.service';

@Component({
  selector: 'app-player-connect',
  templateUrl: './player-connect.component.html',
  styleUrls: ['./player-connect.component.scss']
})
export class PlayerConnectComponent implements OnInit {
  AllSystemComments: SystemComments[] = []
  FlagePoint: boolean = false
  flageGamesHistory: boolean = false
  FlageSystemComments: boolean = false;
  FlagePrivetDitels: boolean = false
  flagsystem_coment = false
  player: player = new player(0, "", "", "", "", "", 0, "");
  GameSettings: GameSetting[] | undefined
  Quizs: Quiz[] | undefined

  constructor(private router: Router, private SystemCommentsService: SystemCommentsService, private QuizServic: QuizService, private PlayerService: PlayerService, private GameSettingsService: GameSettingsService) { }

  ngOnInit(): void {
    let s = JSON.parse(localStorage.player);
    this.player = s;
  }
  startGame(x: number) {
    this.GameSettingsService.GetGameById(x).subscribe(s => {
      console.log(s)
      this.router.navigate(['StartGame', s.quizId]);
    })




  }

  //פניות למערכת של משתמש
  SystemComments() {
    this.flageGamesHistory = false;
    this.FlageSystemComments = true;
    this.FlagePoint = false;
    this.FlagePrivetDitels = false;
    this.SystemCommentsService.GetSystemCommentsByNamePlayer(this.player?.id ? this.player?.id : 0).subscribe(s => { this.AllSystemComments = s, console.log(this.AllSystemComments) })
  }

  point() {
    this.FlagePoint = true;
    this.FlagePrivetDitels = false;
    this.FlageSystemComments = false;
  }

  GamesHistory() {
    this.flageGamesHistory = true;
    this.FlagePoint = false;
    this.FlagePrivetDitels = false;
    this.FlageSystemComments = false;
    if (this.player?.id != null) {
      this.GameSettingsService.GetGameByIdManager(this.player?.id ? this.player?.id : 0).subscribe(s => {
       this.GameSettings = s
        this.GameSettings.forEach(element => {
          this.QuizServic.GetQuizById(element.quizId).subscribe(s => { console.log(s), this.Quizs?.push(s) })

        });
      })

    }



  }

  //פרטי המשתמש
  privetDitels() {
    this.flageGamesHistory = false;
    this.FlageSystemComments = false;
    this.FlagePoint = false;
    this.FlagePrivetDitels = true;
  }

  UpdateDitels() {
    if (this.player != null) {
      this.PlayerService.UpdatPlayer(this.player.id, this.player).subscribe(s => {
        alert("עודכן בהצלחה")
        localStorage.setItem('player', JSON.stringify(s));
      }
      )
    }
  }


  //התנתקות שחקן ממערכת
  LogOut() {
    localStorage.removeItem('player');
    this.router.navigate(['home']);
  }

  add_system_coment() {
    this.FlageSystemComments = false;
    this.flagsystem_coment = true
  }


}
