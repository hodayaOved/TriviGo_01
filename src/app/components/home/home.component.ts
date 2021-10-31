import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { NavbarService } from 'src/app/navbar.service';
import { player } from 'src/model/player';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ser:CategoriesService,private navbar:NavbarService) { }

 
  
  ngOnInit(): void { 
    this.navbar.navBarArr[0]=false
  
    
  }






}
