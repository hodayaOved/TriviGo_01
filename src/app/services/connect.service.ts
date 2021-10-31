import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  public loginEdit = new Subject<string>();
  constructor() {

  }
}
