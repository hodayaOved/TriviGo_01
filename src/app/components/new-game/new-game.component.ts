import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSetting } from 'src/model/GameSetting';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  caterories: boolean = false;
  enyCategory: boolean = false;
  cuterorieschoosd: number[] = [];
  gamesetting: GameSetting = new GameSetting(0, 0, 0, 0, false, false)
  constructor(private router: Router) { }

  ngOnInit(): void {
    debugger
  }


  chooseQuestion() {
    this.caterories = false;
    this.router.navigate(['choose-Question']);
  }
  choose(arr: any) {
    if (arr.length == 0)
      this.enyCategory = true;
    else {
      this.enyCategory = false;
      this.caterories = false;
      this.cuterorieschoosd = arr;
    }
  }

  questionTime() {
    this.gamesetting.questionTime = 0;

  }
  whatSee(see: number) {
    if (see == 1) {
      this.gamesetting.visionPercentage = true;
    }
    else{
      this.gamesetting.visionPlayer = true;

    }
  }

}
