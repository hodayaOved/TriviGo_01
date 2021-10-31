import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionServiceService } from 'src/app/servises/question-service.service';
import { Anser } from 'src/model/Anser';
import { AnserList } from 'src/model/anserList';
import { Question } from 'src/model/Question';

@Component({
  selector: 'app-change-question',
  templateUrl: './change-question.component.html',
  styleUrls: ['./change-question.component.scss']
})
export class ChangeQuestionComponent implements OnInit {
  @Input() thisQuestion = new AnserList([], new Question(0, "", 0, "", 0, 0, 0, 0), false, "", "");//אובייקט של שאלה ורשימת תשובות
  @Output() goOut = new EventEmitter<AnserList>();
  answerListSper: AnserList = new AnserList([], new Question(0, "", 0, "", 0, 0, 0, 0), false, "", "");//שומר את השאלה המקורית למקרה של ביטול
  currentAnser: number = 0;//מספר תשובה נכונה
  image: string = "שנה תמונה";//האם יש תמונה
  level: string = "";//רמה במילים
  doChangeQuestion: boolean = false;//האם רוצים לשנות את השאלה
  doChangeCurrentAnswer: boolean = false;//האם רוצים לשנות את מספר התשובה הנכונה
  doChangeLevel: boolean = false;//האם רוצים לשנות את הרמה
  doChangeAnsers: boolean[] = [];//האם רוצים לשנות את התשובות
  url: string = "";//של התמונה
  img: any;//של התמונה
  isNotImg: boolean = false;//אם המשתמש בחר קובץ שהוא לא תמונה
  ToaddAnswer: boolean = false;//אם רוצים להוסיף שאלות נוספות
  addAnswerText: string = ""//הטקסט של השאלה הנוספת
  // vv: Array<string> = ["mm", "nn", "kk"];

  constructor(private ser: QuestionServiceService) { }

  ngOnInit() {
    //להגדיר את הרשימה של העריכה לאורך רשימת התשובות 
    for (let i = 0; i < this.thisQuestion.ansers.length; i++) {
      this.doChangeAnsers.push(false);
      this.currentanswer();
      this.other()
      this.answerListSper = JSON.parse(JSON.stringify(this.thisQuestion));
    }

  }
  currentanswer() {
    for (let i = 0; i < this.thisQuestion.ansers.length; i++) {
      console.log(this.thisQuestion.ansers[i]);
      if (this.thisQuestion.ansers[i].id == this.thisQuestion.question.correctAnswerId)
        this.currentAnser = i + 1;
    }
  }
  other() {
    this.level = "קשה"
    if (this.thisQuestion.question.image == null || this.thisQuestion.question.image == "")
      this.image = "הוסף תמונה";
  }
  //שינוי של הטקס לאינפוט
  doChange(type: number) {
    switch (type) {
      case -1: this.doChangeQuestion = true
        break;
      case -2: this.doChangeCurrentAnswer = true
        break;
      case -3: this.doChangeLevel = true
        break;
      default: this.doChangeAnsers[type] = true
    }
  }
  //סיום שינוי הטקסט החזרה למצב הרגיל
  FinishedChange(type: number) {
    switch (type) {
      case -1: this.doChangeQuestion = false
        break;
      case -2: this.doChangeCurrentAnswer = false
        break;
      case -3: this.doChangeLevel = false
        break;
      default: this.doChangeAnsers[type] = false
    }
  }
  //שמירת התמונה שנבחרה בתוך משתנה
  onSelectFile(event: any) {
    this.img = event.target.files;
    let i = event.target.files[0].name;
    console.log(this.img);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        // this.url = event.target.result;
        // if (this.img.indexOf(".JPG") == -1 && this.img.indexOf(".jpg") == -1 && this.img.indexOf(".png") == -1 && this.img.indexOf(".PNG") == -1)
        //   this.isNotImg = true;
        // else{
        this.thisQuestion.question.image = event.target.result;
        console.log("blablabla")
        // this.question.image = this.url;
        this.isNotImg = false;
        this.image = "שנה תמונה";
        // }

      }
    }
  }
  //שינוי רמה
  changeLevel(type: number) {
    switch (type) {
      case 1: this.level = "קל"
        break;
      case 2: this.level = "בינוני"
        break;
      case 3: this.level = "קשה"
        break;
    }
  }
  //הוספת תשובה
  addAnswer() {
    this.ToaddAnswer = true;
  }
  //סיום הוספת תשובה
  FinishedChangeNewAnswer() {
    this.ToaddAnswer = false;
    this.thisQuestion.ansers.push(new Anser(0, this.thisQuestion.question.id, this.addAnswerText));
    this.addAnswerText = "";
  }

  //סוגר בלי לשמור
  cancel() {

    this.goOut.emit(this.answerListSper);
  }
  //סוגר  ושומר
  save() {
    this.goOut.emit(this.thisQuestion);
    //
  }
}

