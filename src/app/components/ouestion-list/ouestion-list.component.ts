import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from '../../services/question-service.service';
import { Question } from 'src/model/Question';
import { Quiz } from 'src/model/Quiz';
import { AnsersService } from 'src/app/services/ansers.service';
import { Ansers } from 'src/model/Ansers';
import { AnserList } from 'src/model/anserList';
import { PlayerService } from 'src/app/services/player.service';
import { player } from 'src/model/player';
import { SelectedQuestionsService } from 'src/app/services/selected-questions.service';
import { MatDialog } from '@angular/material/dialog';
import { QuizNameDialogComponent } from 'src/app/components/quiz-name-dialog/quiz-name-dialog.component';

@Component({
  selector: 'app-ouestion-list',
  templateUrl: './ouestion-list.component.html',
  styleUrls: ['./ouestion-list.component.scss']
})
export class OuestionListComponent implements OnInit {
  @Input() idQuestion = 0;//המזהה של הקטגוריה או החידון
  @Input() cateroriOrQuiz = 0;//האם זה לפי קטגוריה או לפי חידון
  @Output() closeComponent = new EventEmitter();
  sub: any;
  c: any;
  questionlist: Question[] = [];//רשימה של השאלות בתוכנית
  openQ: boolean[] = [];//רשימה האם לפתוח כל שאלה או לא
  answerList: Ansers[] = [];//רשימה של תשובות המשמשת כתחנה זמנית עד להכנסה לאובייקט
  listOfAllAnsers: AnserList[] = [];//רשימת האובייקטים המוצגת במסך
  listOfAllAnsersSper: AnserList[] = [];//רשימה ספר בשביל שיהיה ניתן לסנן פעמיים
  changeQuestion1: boolean[] = [];//האם לשנות את השאלה- מופע של שאלה עם אפשרות לעריכה
  choosenQuestiones: number[] = [];//רשימה של האי די של השאלות הנבחרות
  sortList = [{ label: "מהקל לקשה", value: 1 }, { label: "מהקשה לקל", value: 2 }, { label: "קודם שאלות מערכת", value: 3 }]
  filterList = [{ label: "קל", value: 1 }, { label: "בינוני", value: 2 }, { label: "קשה", value: 3 }, { label: "שאלות מערכת", value: 4 }, { label: "ללא סינון", value: 5 }]
  openAllQuestionBool: boolean = false;//האם לפוח את כל השאלות או לסגור אותם
  currentQuizName: string = "";//שם החידון


  constructor(private route: ActivatedRoute, private ser: QuestionServiceService, private seranswer: AnsersService, private serPlayer: PlayerService,
    private selectedQuestionsService: SelectedQuestionsService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Allquestion();

  }
  //מביא את כל השאלות לפי הקרטריונים שהתקבלו- אם זה לפי קטגוריות או לפי שאלות ומה ה id
  Allquestion() {
    if (this.cateroriOrQuiz == 1) {
      this.ser.GetQuestionsByCategory(this.idQuestion).subscribe(result => {
        this.questionlist = result, this.inToOpenQ(), this.getAllAnsers()
      });
    }
    else {
      this.ser.GetQuestionsByQuiz(this.idQuestion).subscribe(result => {
        this.questionlist = result; this.inToOpenQ(); this.getAllAnsers()
      });
    }
  }

  //מגדיר 2 רשימת בוליאניות- כאורך הרשימה- לפתיחת השאלות ולעריכתן
  inToOpenQ() {
    for (let i = 0; i < this.questionlist.length; i++) {
      this.openQ.push(false);
    }
    for (let i = 0; i < this.questionlist.length; i++) {
      this.changeQuestion1.push(false);
    }
  }
  //מביא את כל התשובות ומכניס לרשימה של אובייקטים מסוג רשימת תשובות
  getAllAnsers() {
    for (let i = 0; i < this.questionlist.length; i++) {
      this.getAnsers(this.questionlist[i])
    }
  }
  //מביא רשימת תשובות לשאלה אחת
  getAnsers(question: Question) {
    this.seranswer.GetAnsersByQuestion(question.id).subscribe(
      result => { this.answerList = result; this.addTolistOfAllAnsers(question, this.answerList) });
  }
  //פונקציה שמוסיפה לרשימת האובייקטים אובייקט מסוג רשימת שאלות עם כל הנדרש
  addTolistOfAllAnsers(question: Question, answers: Ansers[]) {
    let level: string;
    switch (question.level) {
      case 1: level = "קל"
        break;
      case 2: level = "בינוני"
        break;
      case 3: level = "קשה"
        break;
    }
    this.serPlayer.GetPlayerById(question.userId).subscribe(
      result => {
        this.listOfAllAnsers.push(new AnserList(answers, question, question.userId == 1, level, result.name));
        this.listOfAllAnsersSper = JSON.parse(JSON.stringify(this.listOfAllAnsers));
      },
      arr => {
        console.log(arr)
      }
    )
  }


  //פונקציה שפותחת שאלה בודדת
  openQueston(id: number) {
    let i = this.listOfAllAnsers.findIndex(q => q.question.id == id);
    this.openQ[i] = !this.openQ[i];
  }
  //פונקציה שפותחת את כל השאלות
  openAllQuestion() {
    if (this.openAllQuestionBool) {
      for (let i = 0; i < this.openQ.length; i++) {
        this.openQ[i] = false;
      }
      this.openAllQuestionBool = false;
    }
    else {
      for (let i = 0; i < this.openQ.length; i++) {
        this.openQ[i] = true;
      }
      this.openAllQuestionBool = true;
    }

  }
  //אם רוצים לערוך שאלה - הופכת לטרו(אמת) את המופע של השאלה עם העריכה
  changeQuestion(i: number) {
    this.openQ[i] = false;
    this.changeQuestion1[i] = true;
  }
  // כשסימו לערוך שאלה סוגרים ושומרים אותה
  goOut(answerList: AnserList, i: number) {
    this.changeQuestion1[i] = false;
    console.log(answerList);
    this.listOfAllAnsers[i] = answerList;
  }
  //מכניס לרשימה את כל השאלות שרוצים שיהיו בחידון
  chooseQuestion(id: number) {
    var x = this.choosenQuestiones.indexOf(id)
    if (x == -1)
      this.choosenQuestiones.push(id);
    else {
      delete this.choosenQuestiones[x];
    }
  }
  select(option: any) {

  }

  //מסנן ע"פ הפרמטר שהגיע
  selectFilter(event: any) {
    console.log(event);
    switch (event.value) {
      case (1): this.listOfAllAnsers = this.listOfAllAnsersSper.filter((a) => a.question.level == 1);
        break;
      case (2): this.listOfAllAnsers = this.listOfAllAnsersSper.filter((a) => a.question.level == 2);
        break;
      case (3): this.listOfAllAnsers = this.listOfAllAnsersSper.filter((a) => a.question.level == 3);
        break;
      case (4): this.listOfAllAnsers = this.listOfAllAnsersSper.filter((a) => a.question.userId == 1);
        break;
      case (5): this.listOfAllAnsers = this.listOfAllAnsersSper.filter((a) => a);
        break;
    }
  }
  //ממין לפי הפרמטר שהגיע
  selectSorted(event: any) {
    const v = event.value;
    switch (v) {
      case (1): this.listOfAllAnsers.sort((a, b) => a.question.level - b.question.level);
        break;
      case (2): this.listOfAllAnsers.sort((a, b) => b.question.level - a.question.level);
        break;
      case (3): this.listOfAllAnsers.sort((a, b) => a.question.userId - b.question.userId);
        break;
    }
  }

  //שומר את השאלות שנבחרו ועובר לבחירת שאלות נוספות
  saveAndChooseMore() {
    console.log("saveAndChooseMore");
    for (let i = 0; i < this.choosenQuestiones.length; i++) {
      if (this.choosenQuestiones[i] != null)
        this.selectedQuestionsService.selectedQuestion.push(this.choosenQuestiones[i]);
    }
    this.closeComponent.emit();
  }
  //שומר ויוצר חידון חדש
  save() {
    for (let i = 0; i < this.choosenQuestiones.length; i++) {
      if (this.choosenQuestiones[i] != null)
        this.selectedQuestionsService.selectedQuestion.push(this.choosenQuestiones[i]);
    }
    console.log( this.selectedQuestionsService.selectedQuestion);
    
    //יוצר מופע של הדיאלוג לבחירת שם לחידון
    const dialogRef = this.dialog.open(QuizNameDialogComponent, {
      width: '250px',
      data: { name: this.currentQuizName }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed' + result + " " + this.currentQuizName);
      //אם חזר שם זה אומר שעשה אישור ולא ביטול
      if (result != "") {
        this.currentQuizName = result;



      }
    });
    console.log(this.currentQuizName);
  }

}
