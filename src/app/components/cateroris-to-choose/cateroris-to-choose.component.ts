import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categories } from 'src/model/Categories';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-cateroris-to-choose',
  templateUrl: './cateroris-to-choose.component.html',
  styleUrls: ['./cateroris-to-choose.component.scss']
})
export class CaterorisToChooseComponent implements OnInit {
  categoryList: Categories[] = [];
  caterorischoos: number[] = [];
  caterogyInEnd: number[] = [];
  constructor(private categoriesService: CategoriesService) { }

  @Output() chooseCategories = new EventEmitter<number[]>();

  ngOnInit(): void {
    this.initCaterories();
  }
  change(id: number) {
    var x = this.caterorischoos.indexOf(id)
    if (x == -1)
      this.caterorischoos.push(id);
    else {
      delete this.caterorischoos[x];
    }
  }
  initCaterories() {
    this.categoriesService.AllCategories().subscribe(data => {
      console.log(data);
      this.categoryList = data
    });
  }
  out() {
    for (let i = 0; i < this.caterorischoos.length; i++) {
      if (this.caterorischoos[i] != null)
        this.caterogyInEnd.push(this.caterorischoos[i])
    }
    this.chooseCategories.emit(this.caterogyInEnd);
  }
}
