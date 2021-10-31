import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quiz } from 'src/model/Quiz';
const url:string=environment.http+"Quiz/";
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
 
  GetAllQuiz():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(url+"GetAllQuiz")
  }
  GetQuizzesByName(name:string):Observable<Quiz[]>{
    return this.http.get<Quiz[]>(url+"GetQuizzesByName/"+name)
  }
  GetQuizById(id:number):Observable<Quiz>{
    return this.http.get<Quiz>(url+"GetQuizById/"+id)
  }
  AddQuiz(quizName:string):Observable<Quiz>{
    return this.http.post<Quiz>(url+"AddQuiz",quizName);
  }
  ChangeLastUseDete(q:Quiz):Observable<Quiz>{
    return this.http.put<Quiz>(url+"ChangeLastUseDete/",q)
  }
  ChangeQuizName(q:Quiz,name:string):Observable<Quiz>{
    return this.http.put<Quiz>(url+"ChangeQuizName/"+name,q)
  }
  
}
