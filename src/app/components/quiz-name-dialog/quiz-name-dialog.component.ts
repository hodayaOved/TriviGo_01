import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-quiz-name-dialog',
  templateUrl: './quiz-name-dialog.component.html',
  styleUrls: ['./quiz-name-dialog.component.scss']
})
export class QuizNameDialogComponent implements OnInit {
  // name:string="";
  public error: string = "";
  constructor(
    public dialogRef: MatDialogRef<QuizNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit(): void {
    console.log(this.data);
  }
  //ביטול
  onNoClick(): void {
    this.data.name = "";
    this.dialogRef.close();
  }
  //אישור
  saveName() {
    if (this.dialogRef.componentInstance.data.name != "") {
      this.error = "";
      this.dialogRef.close(this.dialogRef.componentInstance.data.name);
    }
    this.error = "!שדה זה חובה"
  }
}
