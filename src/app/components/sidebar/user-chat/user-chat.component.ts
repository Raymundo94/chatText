import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {

  @Input() userInfo: any;


  constructor() { }

  ngOnInit(): void {
  }

}
