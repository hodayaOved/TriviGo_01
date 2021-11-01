import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemComments } from 'src/model/SystemComments';
import { SystemCommentsService } from 'TriviGo/git/src/app/services/system-comments.service';

@Component({
  selector: 'app-system-comments',
  templateUrl: './system-comments.component.html',
  styleUrls: ['./system-comments.component.scss']
})
export class SystemCommentsComponent implements OnInit {

  constructor(private SystemCommentsService: SystemCommentsService,private router: Router) { }
  SystemComments:SystemComments=new SystemComments(0,1,"",1,null,new Date());
  ngOnInit(): void {
  }
  send(){
    debugger
    this.SystemCommentsService.AddSystemComments(this.SystemComments).subscribe(s =>alert("yesss"))
    this.router.navigate(['home']);
  }
}
