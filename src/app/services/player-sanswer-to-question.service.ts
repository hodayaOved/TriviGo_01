import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import { PlayerSAnswerToQuestion } from 'src/model/PlayerSAnswerToQuestion';

@Injectable({
  providedIn: 'root'
})
export class PlayerSAnswerToQuestionService {

  constructor(private http: HttpClient) { }

  AddGroups(p:PlayerSAnswerToQuestion): Observable<PlayerSAnswerToQuestion> {
    return this.http.post<PlayerSAnswerToQuestion>(environment+"PlayerSAnswerToQuestion", p);
  }
}
