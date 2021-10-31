import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameSetting } from 'src/model/GameSetting';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

  constructor(private http: HttpClient) { }

  GetGameById(Id:number):Observable<GameSetting>{
    return this.http.get<GameSetting>(environment.http +"GameSetting/GetGameById/"+Id)
  }
  GetGameByIdManager(Id:number):Observable<GameSetting[]>{
    return this.http.get<GameSetting[]>(environment.http +"GameSetting/GetGameByIdManager/"+Id)
  }

  TimeIsNotNull(idGame:number):Observable<number>{
    return this.http.get<number>(environment.http +"GameSetting/TimeIsNotNull/"+idGame)
  }
}
