import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/model/Categories';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private ser: CategoriesService) { }
  AllCategry: Categories[] = [];


  ngOnInit(): void {
    this.ser.AllCategories().subscribe(s => {
      this.AllCategry = s.filter(a => a.id < 25)
    })



  }

}
