import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ansers } from 'src/model/Ansers';

@Injectable({
  providedIn: 'root'
})
export class AnsersService {

  constructor(private http: HttpClient) { }

  AddAnsers(ansers:Ansers): Observable<Ansers> {
    return this.http.post<Ansers>(environment+"Ansers",ansers);
  }

  DeleteAnser(ansers:Ansers): Observable<Ansers> {
    return this.http.delete<Ansers>(environment+"Ansers/"+ansers);
  }

  DeleteAnsersByQuestionsers(IdQuestion:number): Observable<Ansers[]> {
    return this.http.delete<Ansers[]>(environment+"Ansers/"+IdQuestion);
  }

  GetAnserById(Id:number): Observable<Ansers> {
    return this.http.get<Ansers>(environment+"Ansers/GetAnserById/"+Id);
  }

  GetAnsersByQuestion(IdQuestion:number): Observable<Ansers[]> {
    return this.http.get<Ansers[]>(environment.http+"Ansers/GetAnsersByQuestion/"+IdQuestion);
  }

  UpdatAnser(ansers:Ansers,ansersUpdate:string): Observable<Ansers> {
    return this.http.put<Ansers>(environment+"Ansers",ansers+ansersUpdate);
  }
  
  
}
