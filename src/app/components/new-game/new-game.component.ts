import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  caterories: boolean = false;
  enyCategory: boolean = false;
  cuterorieschoosd: number[] = [];
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

}
