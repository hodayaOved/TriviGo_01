import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CategoriesForQuestions } from 'src/model/CategoriesForQuestions';
const url:string=environment.http+"categories/";
@Injectable({
  providedIn: 'root'
})
export class CategoriesForQuestionsService {

  constructor(private http: HttpClient) { }
  AddQuestionToCategories(idQuestion:number,idCategory:number):Observable<CategoriesForQuestions>{
    return this.http.get<CategoriesForQuestions>(url+"AddQuestionToCategories/"+idQuestion+"/"+idCategory)
  }
}
