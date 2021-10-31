import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Categories } from 'src/model/Categories';
import { Quiz } from 'src/model/Quiz';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-choose-question',
  templateUrl: './choose-question.component.html',
  styleUrls: ['./choose-question.component.scss']
})
export class ChooseQuestionComponent implements OnInit {
  categoryList: Categories[] = [];
  quizList: Quiz[] = [];
  quiznames: string[] = [];
  categories: boolean = true;
  quiz: boolean = false;
  newQuestion: boolean = false;
  questionList: boolean = false;
  idToLists: number = 0;
  CateroriOrQuiz:number=0;
  constructor(private categoriesService: CategoriesService, private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.initCaterories();
    this.initQuiz();
  }
  initCaterories() {
    this.categoriesService.AllCategories().subscribe(data => {
      console.log(data);
      this.categoryList = data;
    });
  }
  initQuiz() {
    this.quizService.GetAllQuiz().subscribe(data => {
      console.log(data);
      this.quizList = data
    });
  }
  gotoquestion(id: number,q:number) {
    this.CateroriOrQuiz=q;
    this.idToLists = id;
    this.questionList = true;
    this.categories = false;
    this.quiz = false;
  }
  categoriesfunc() {
    this.questionList = false;
    this.categories = true;
    this.quiz = false;
    this.newQuestion = false;
  }
  quizfunc() {
    this.questionList = false;
    this.categories = false;
    this.quiz = true;
    this.newQuestion = false;
  }
  newQuestionfunc() {
    this.questionList = false;
    this.categories = false;
    this.quiz = false;
    this.newQuestion = true;

  }
  //סוגר את הקומפוננטה של רשימת שאלות
  closeQuestionList(event:any){
    this.questionList=false;
    this.categories = true;
  }
}
