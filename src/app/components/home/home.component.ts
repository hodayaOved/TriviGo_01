import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { player } from 'src/model/player';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private ser:CategoriesService) { }

 
  
  ngOnInit(): void { 
    
  }
  startGame(){
    this.router.navigate(['openGame']);
  }
  startOnlin(){
    this.router.navigate(['game-online']);
  }
  newGame(){
    this.router.navigate(['newGame']);
  }






}
