import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GameOnlineService {

  constructor(private http: HttpClient) { }
  
  FlagStartGameOnline=false
  startGameOnline(): Observable<number> {
    return this.http.get<number>("http://localhost:51310/api/gameOnline");
  }
}
