import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent {

  @Input() userInfo: any;

  constructor(private data: DataService) { }
  
  setChats():any{
    this.data.userId$.emit(this.userInfo.id);
  }

}
