import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SystemComments } from 'src/model/SystemComments';


@Injectable({
  providedIn: 'root'
})
export class SystemCommentsService {

  constructor(private http: HttpClient) { }

  AddSystemComments(comments:SystemComments): Observable<SystemComments> {
    return this.http.post<SystemComments>(environment.http+"SystemComments", comments);
  }

  DeletSystemComments(Id:number): Observable<SystemComments> {
    return this.http.delete<SystemComments>(environment.http+"SystemComments/"+ Id);
  }

  GetSystemCommentsByNamePlayer(idPlayer:number): Observable<SystemComments[]> {
    return this.http.get<SystemComments[]>(environment.http+"SystemComments/GetSystemCommentsByNamePlayer/"+idPlayer);
  }
 

  UpdateStatusComments(comments:SystemComments,Id:number): Observable<SystemComments> {
    return this.http.put<SystemComments>(environment.http+"SystemComments/"+comments,Id);
  }
  

  
}
