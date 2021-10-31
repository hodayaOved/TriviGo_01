import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from 'src/model/Categories';
import { player } from 'src/model/player';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  AllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(environment.http+"Categories");
  }
 
  AddCategories(c:Categories): Observable<Categories> {
    return this.http.post<Categories>(environment.http+"Categories", c);
  }
}
