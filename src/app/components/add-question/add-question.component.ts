import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnsersService } from 'src/app/services/ansers.service';
import { CategoriesForQuestionsService } from 'src/app/services/categories-for-questions.service';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { Ansers } from 'src/model/Ansers';
import { Question } from 'src/model/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  caterories: boolean = false;
  numAnser: number = 4;//כמה תשובות יש בשביל התשובה הנכונה
  arrnumansers: {//כמה תשובות שיש- שומר אתהתשובות
    name: string;
  }[] = [];
  newquestion: Question = new Question(0, "", 0, "", 0, 0, 0, 0);//שומר בngmodel את כל המאפיינים של שאלה
  url: string = "";//של התמונה
  img: any;//של התמונה
  notgoodimg: boolean = false;//האם המסמך הוא תמונה
  thisanswer: Ansers = new Ansers(0, 0, "");
  currentanser: number = 0;//מספר התשובה הנכונה
  cuterorieschoosd: number[] = [];//קטגוריות נבחרות
  enyCategory: boolean = false;//האם נבחרה לפחות קטגוריה אחת
  constructor(private ser: QuestionServiceService, private seranser: AnsersService, private sercafoqu: CategoriesForQuestionsService) { }

  ngOnInit(): void {
    this.addanserstart();
    this.url = "";
  }
  //בהתחלה יש 4 תשובות ואח"כ מוסיפה כמה שמבקשים
  addanserstart() {

    this.arrnumansers.push({ name: "" });
    this.arrnumansers.push({ name: "" });
    this.arrnumansers.push({ name: "" });
    this.arrnumansers.push({ name: "" });

  }
  //הוספת תשובה- הוספה למערך והוספת המספר בשביל התשובה הנכונה
  addAnser() {
    this.arrnumansers.push({ name: "" });
    this.numAnser++;
  }
  onlysave() {
    this.save();
    //לצאת מהקומפוננטה
  }
 async saveAndAnotherQuestion() {
    await this.save();
    this.arrnumansers = [];
    this.addanserstart();
    this.currentanser = 0;
    this.newquestion.question1 = "";
    this.newquestion.id = 0;
    this.newquestion.image = "";
    this.newquestion.level = 0;
    this.newquestion.userId = 0;
    this.url = "";
    this.enyCategory = false;
    this.cuterorieschoosd = [];
  }
 async save() {
  await  this.ser.AddQuestion(this.newquestion).subscribe(data => {
      this.newquestion = data; console.log(this.newquestion);
      var id = this.newquestion.id;
      for (var i = 0; i < this.arrnumansers.length; i++) {
        this.thisanswer.questionsId = id;
        this.thisanswer.anser = this.arrnumansers[i].name;
        this.seranser.AddAnsers(this.thisanswer).subscribe(a => {
          this.thisanswer = a; console.log(this.thisanswer), console.log(this.thisanswer), this.save3(i)
        })
      }
      for (let i = 0; i < this.cuterorieschoosd.length; i++) {
        this.sercafoqu.AddQuestionToCategories(id, this.cuterorieschoosd[i]).subscribe(a => {console.log(this.thisanswer) })
      }
      this.save2(id);
    });
  }
  save2(id:number) {
   
  }
 async save3(i: number) {
    if (i + 1 == this.currentanser) {
      this.newquestion.correctAnswerId = this.thisanswer.id;
    await this.ser.UpdateQuestion(this.newquestion).subscribe(a => { this.newquestion = a; console.log(this.newquestion) })
    }
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

  level(l: number) {
    this.newquestion.level = l;
  }

  onSelectFile(event: any) {
    this.img = event.target.files;
    console.log(this.img);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        if (this.img.indexOf(".JPG") == -1 && this.img.indexOf(".jpg") == -1 && this.img.indexOf(".png") == -1 && this.img.indexOf(".PNG") == -1)
          this.notgoodimg = true;
        else
          this.newquestion.image = this.url;
      }
    }
  }

}
