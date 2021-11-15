import { Component, OnInit } from '@angular/core';
import { player } from 'src/model/player';

@Component({
  selector: 'app-chat-onlin',
  templateUrl: './chat-onlin.component.html',
  styleUrls: ['./chat-onlin.component.scss']
})
export class ChatOnlinComponent implements OnInit {
  chat = [
    {
      "Question":
        [

          { "name": "הודיה" },
          { "time": "12:22" },
          { "masseg": "היי מה קורה אני מנצחחח" },
          { "profil": "" }
        ]
    }
  ]
  player:player | undefined
  constructor() { }
  ngOnInit(): void {
    let s = JSON.parse(localStorage.player);
    this.player = s;
  }
  send(messeg:string) {

    this.chat.push(
      {
        "Question":
          [

            { "name":(this.player?.name)?this.player?.name:"null"  },
            { "time": new Date().getTime().toString() },
            { "masseg": messeg },


          ]
      }
    )
    
  }
}

