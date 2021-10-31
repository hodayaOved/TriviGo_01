import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { player } from 'src/model/player';
import { NavbarService } from './navbar.service';
import { ConnectService } from './services/connect.service';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'TrevFun';
  namePlayer: any = "";
  p: player = new player(0, "", "", "", "", "", 0, "https://upload.wikimedia.org/wikipedia/commons/a/a8/Viljo_koirarannalla_18-edit2.jpg");
  player: any;
  err: string = "";
  editUser!: Subscription;
  constructor(private serPlayer: PlayerService, private playerService: PlayerService, private connectService: ConnectService,private navbar:NavbarService) { }
  d:any
  ngOnInit() {
    this.d=this.navbar.navBarArr
    console.log(this.d[2])
        let s:any = localStorage.getItem("player");
    this.namePlayer = " שלום " + s?s.name:'';
     this.connectService.loginEdit.subscribe((name)=>{
      this.namePlayer = name;
      console.log("****************************************");
      console.log(name);
    })

  }

  addplayer(childPlayer: any) {
    this.namePlayer = childPlayer;
  }
 


  }


