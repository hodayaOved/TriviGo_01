import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSetting } from 'src/model/GameSetting';
import { player } from 'src/model/player';
import { Question } from 'src/model/Question';
import { GameSettingsService } from '../../services/game-settings.service';
import { QuestionServiceService } from '../../services/question-service.service';

@Component({
  selector: 'app-open-game',
  templateUrl: './open-game.component.html',
  styleUrls: ['./open-game.component.scss']
})
export class OpenGameComponent implements OnInit {

  constructor(private router: Router, public ser: GameSettingsService, private serQuestion: QuestionServiceService) { }
  gs: GameSetting = new GameSetting(0, 2, 2, 2, true, true)
  player: player | undefined
  Questions: Question[] = []
  ngOnInit(): void {
  }
  startGame(Kod: any) {

 
      this.router.navigate(['StartGame', Kod]);
    
  }



}
