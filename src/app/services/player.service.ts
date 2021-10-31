import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { player } from 'src/model/player';
//import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 // player: player = new player("", "", "", "", "", 0, "");
  constructor(private http: HttpClient) { }

  GetPlayerByMailAndPasword(email: string,password:string): Observable<player> {
    return this.http.get<player>(environment.http + "player/GetPlayerByMailAndPasword/"+email+"/"+password );
  }

  AddPlayer(p:player): Observable<player> {
    return this.http.post<player>(environment.http+"player", p);
  }
  
  ForgotPassword(email:string): Observable<player> {
    return this.http.get<player>(environment.http + "player/ForgotPassword/"+email );
  }

  GetPlayerById(id:number): Observable<player> {
    return this.http.get<player>(environment.http + "player/ForgotPassword/"+id );
  }

  UpdatPlayer(idPlayer:number,player:player): Observable<player> {
    return this.http.put<player>(environment.http+"player/UpdatPlayer/"+idPlayer,player);
  }
  

}






