import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { time } from 'node:console';
import { ActionSequence } from 'protractor';
import { timer } from 'rxjs';
//import { time } from 'node:console';
import { interval, Subscription } from 'rxjs';
import { GameSettingsService } from 'src/app/services/game-settings.service';

import { Ansers } from 'src/model/Ansers';
import { GameSetting } from 'src/model/GameSetting';
import { Question } from 'src/model/Question';
//import { Question } from 'src/model/Question';
import { AnsersService } from '../../services/ansers.service';
import { QuestionServiceService } from '../../services/question-service.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})



export class StartGameComponent implements OnInit {
  gs: GameSetting | undefined
  QuizId: number = 0;
  // qu: Question = new Question(0, "", 0, "", 0, 0, 0, 0);
  q1: any;
  q: Question[] = [];
  arrAnswer: Ansers[] = [new Ansers(1, 1, "d")]
  sub: any
  questionTime: number = 0;
  CountQuestion: number = 0
  Time: number = 0;
  TimeConst = 0;
  IdSetting: number = 0
  subscription: Subscription | undefined;
  // t: boolean = false
  constructor(private router: Router, public serAnswer: AnsersService, private GameSettingsService: GameSettingsService, private ro: ActivatedRoute, private serQuestion: QuestionServiceService) { }


  ngOnInit(): void {
    this.sub = this.ro.params.subscribe(p => { this.IdSetting = p['id'] })
    this.startGame()
  }
  startGame() {
    if (this.IdSetting != 0)//משחק מוכן
    {
      this.serQuestion.GetQuestionsByQuiz(this.IdSetting).subscribe
        (y => {
          this.q = y, console.log(y),
            this.AddQuestion(),
            this.CountQuestion = this.q.length;
        })
    }
    else//משחק אונליין
    {
      this.serQuestion.GetQuestionsMixOnline().subscribe(y => { this.q = y, this.AddQuestion(), this.CountQuestion = this.q.length; })
      this.TimeConst = 25;
      this.Time = this.TimeConst;
      const source = interval(1000);
      this.subscription = source.subscribe(val => { this.Time--, this.timers() });
    }

    debugger
    this.GameSettingsService.TimeIsNotNull(this.IdSetting).subscribe(
      s => {
        alert(s)
        if (s != 0) {   //אם המשחק לפני זמן מוקצב
          this.TimeConst = s;
          this.Time = this.TimeConst;
          const source = interval(1000);
          this.subscription = source.subscribe(val => { this.Time--, this.timers() });
          var x = document.getElementById('NOTETIME');
          x?.setAttribute("style", "display:none");

        }
        else {

          var x = document.getElementById('TIMER');
          x?.setAttribute("style", "display:none");

        }
      }

    )
  }

  AddQuestion() {

    if (this.q.length != null) {
      this.q1 = this.q?.pop();
      this.serAnswer.GetAnsersByQuestion(this.q1.id).subscribe(s => { this.arrAnswer = s, console.log(this.arrAnswer) });
    }
    if (this.q == null) {
      this.ngOnDestroy()
    }
  }

  ngOnDestroy() {
    // this.subscription?.unsubscribe();
  }

  timers() {
    if (0 == this.Time) {
      this.AddQuestion()
      this.Time = this.TimeConst
    }
  }

  
}
