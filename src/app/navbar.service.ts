import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navBarArr1 =
    [
      { "name":"home", "bol":false },
      { "name":"SystemComment", "bol":false },
      { "name":"openGame", "bol":false },
      { "name":"game-online", "bol":false },
      { "name":"login", "bol":false },
      { "name":"PlayerConnect", "bol":false },
      
    ]
  navBarArr =
    [
     true,false, false,false, false,false, false,false,
      
    ]
  constructor() { }
}
