import { Injectable } from '@angular/core';
//import { Question } from 'src/model/Question';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from 'src/model/Question';
 const url:string=environment.http+"Question/";
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  

  constructor(private http: HttpClient) { }

  IsSystemQuestion(IdQuestion:number):Observable<Boolean>{
    return this.http.get<Boolean>(url+"IsSystemQuestion"+IdQuestion)
  }
  GetQuestionById(Id:number):Observable<Question>{
    return this.http.get<Question>(url+"GetQuestionById/"+Id)
  }
  AddQuestion(Question:Question):Observable<Question>{
    return this.http.post<Question>(url,Question)
  }
  Deletquestion(id:number):Observable<Question>{
    return this.http.delete<Question>(url+"Deletquestion/"+id)
  }
  IsSeker(id:number):Observable<Boolean>{
    return this.http.get<Boolean>(url+"IsSeker/"+id)
  }
  GetQuestionsByCategory(id:number):Observable<Question[]>{
    return this.http.get<Question[]>(url+"GetQuestionsByCategory/"+id)
  }
  GetQuestionsByQuiz(id:number):Observable<Question[]>{
    return this.http.get<Question[]>(url+"GetQuestionsByQuiz/"+id)
  }
  GetQuestionsMixOnline():Observable<Question[]>{
    return this.http.get<Question[]>(url+"GetQuestionsMixOnline")
  }
  UpdateQuestion(q:Question):Observable<Question>{
    return this.http.put<Question>(url+" UpdateQuestion",q)
  }
  GetQuestionsByGame(idGame:number):Observable<Question[]>{
    return this.http.get<Question[]>(url+"GetQuestionsByGame/"+idGame)
  }
}
