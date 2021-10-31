import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Groups } from 'src/model/Groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  AddGroups(p:Groups): Observable<Groups> {
    return this.http.post<Groups>(environment+"Groups", p);
  }
  
  DeleteGroups(p:Groups): Observable<Groups> {
    return this.http.delete<Groups>(environment+"Groups/"+ p);
  }

  GetGroupById(Id:number): Observable<Groups> {
    return this.http.get<Groups>(environment+"Groups/"+Id);
  }

  UpdatGroup(groups:Groups,name:string): Observable<Groups> {
    return this.http.put<Groups>(environment+"Groups",groups+ name);
  }
  


}
