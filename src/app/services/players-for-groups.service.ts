import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayersForGroups } from 'src/model/PlayersForGroups';

@Injectable({
  providedIn: 'root'
})
export class PlayersForGroupsService {

  constructor(private http: HttpClient) { }

  AddplayersForGroups(p:PlayersForGroups): Observable<PlayersForGroups> {
    return this.http.post<PlayersForGroups>(environment.http+"PlayersForGroupsService", p);
  }

  DeletPlayerForGroups(IdGroups:number,IDPlayersForGroups:number): Observable<PlayersForGroups> {
    return this.http.delete<PlayersForGroups>(environment.http+"PlayersForGroupsService"+IdGroups+IDPlayersForGroups);
  }
  
  UpdatePlayerForGroups(idUpdate:number,PlayersForGroups:PlayersForGroups): Observable<PlayersForGroups> {
    return this.http.put<PlayersForGroups>(environment.http+"PlayersForGroupsService/"+idUpdate,PlayersForGroups);
  }
  
}
