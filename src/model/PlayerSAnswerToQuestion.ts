import { Time } from "@angular/common";

export class PlayerSAnswerToQuestion{

    constructor(public id:number,gameId:number,
       public PlayerId:number,
      public AnserId:number,
      public QuestionsForQuizzesId:number,
      public AnserTime:Time){

      }
 
}