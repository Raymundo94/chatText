import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent {

  @Input() userInfo: any;

  constructor(private data: DataService,  private spinner: NgxSpinnerService) { }
  
  setChats():void{
    this.spinner.show();
    if( this.userInfo.count){
      this.userInfo.count = null;
    }
    this.data.userId$.emit(this.userInfo.id);
  }

}
