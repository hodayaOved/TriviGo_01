import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/services/connect.service';
//import { Router } from '@angular/router';
import { player } from 'src/model/player';
import { SystemComments } from 'src/model/SystemComments';
import { PlayerService } from '../../services/player.service';
import { SystemCommentsService } from '../../services/system-comments.service';
import { checkpasword } from './checkpasword';
// import { checkpasword } from './checkpasword';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err: string = "";
  H1LoginRghit = "התחבר";
  H3LoginRghit = "בכדי להנות ממשחקים שיצרת וליצור משחקים חדשים התחבר עכשיו"
  myform: FormGroup;
  addplayer: player = new player(0, "yair", "oved", "@gmail.com", "dddd", "00222", 9, "dd");
  // p: player = new player(0, "", "", "", "", "", 0, "https://upload.wikimedia.org/wikipedia/commons/a/a8/Viljo_koirarannalla_18-edit2.jpg");
  // @Output()
  // myAddEvent: EventEmitter<string> = new EventEmitter<string>();\
  flagelogup: boolean = false
  flagelogin: boolean = true
  flageforgetPasword: boolean = false

  constructor(public router: Router, public ser: PlayerService, private connectService: ConnectService) {
    this.myform = new FormGroup(
      {
        "name": new FormControl(null, Validators.required),
        "famelyName": new FormControl(null, Validators.required),
        "Pas1": new FormControl(null),
        "Pas2": new FormControl(null),
        "email": new FormControl(null, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")),
        "phone": new FormControl(null),
        "checbox": new FormControl(null, Validators.requiredTrue)
      }
    );
  }

  ngOnInit(): void {
    this.flagelogin = true
    let s = localStorage.getItem("player");
    if (s != null) {
      this.router.navigate(['PlayerConnect']);
    }

  }
  //כניסה לאתר
  check(mail: string, password: string) {
    this.err = "";
    this.ser.GetPlayerByMailAndPasword(mail, password).subscribe(s => {
      // this.p = s;
      this.connectService.loginEdit.next(s.name);
      localStorage.setItem('player', JSON.stringify(s));
      this.router.navigate(['PlayerConnect']);
    }, (err => this.err = "שם המשתמש או הסיסמא שגויים ,נסה שוב"));
  }
  //הוספת משתמש
  save() {
    this.addplayer = new player(
      3, this.myform.controls.name.value,
      this.myform.controls.famelyName.value,
      this.myform.controls.email.value,
      this.myform.controls.Pas1.value,
      this.myform.controls.phone.value, 0
    )
    console.log(this.addplayer)
    // this.myform.controls.phone1.value, 0)
    console.log(this.addplayer)
    this.ser.AddPlayer(this.addplayer).subscribe(s => {
      this.myform.reset();
      this.connectService.loginEdit.next(s.name);
      localStorage.setItem('player', JSON.stringify(s));
      this.router.navigate(['PlayerConnect']);
    }, err => this.err = err.value)
  }
  //שכח סיסמא
  forgetPasword(email: string) {
    this.ser.ForgotPassword(email).subscribe(s => alert("נשלחחח"));
  }


  FlageforgetPasword() {
    this.flageforgetPasword = true;
    this.flagelogin = false;
    this.flagelogup = false;
    this.H1LoginRghit = "שכחת סיסמא?";
    this.H3LoginRghit = "שלח לנו את כתובת המייל שלך ותוך מס דקות תקבל את הסיסמא שלך במייל"


  }
  logup() {
    this.flagelogup = true;
    this.flagelogin = false;
    this.flageforgetPasword = false;
    this.H1LoginRghit = "הרשם"
    this.H3LoginRghit = "בכדי ליצור משחקים ולהיות רשום במערכת הרשם עכשיו"


  }
  login() {
    this.flagelogup = false;
    this.flagelogin = true;
    this.flageforgetPasword = false
    this.H1LoginRghit = "התחבר";
    this.H3LoginRghit = "בכדי להנות ממשחקים שיצרת וליצור משחקים חדשים התחבר עכשיו"
    // document.getElementById("login").style.borderBottom="2px solid #858586"
  }










}
