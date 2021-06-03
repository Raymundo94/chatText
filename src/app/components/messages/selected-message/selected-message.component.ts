import { Component, ElementRef, Input } from '@angular/core';
import { Chats } from 'src/app/models/chats';

@Component({
  selector: 'app-selected-message',
  templateUrl: './selected-message.component.html',
  styleUrls: ['./selected-message.component.scss']
})
export class SelectedMessageComponent {
  messagesData: Chats[] = [];
  messagesContainerRef!: ElementRef;
  message!:string;
  userInfo: any;
  userMe: any;

  constructor(){
  }

  // chat-content
  @Input() set messages(value: any) {
    if (value) {
      let msj:Chats[] = value;
      msj.forEach((element:any) => {
        element.date = new Date(element.date);
      });
      const sortedActivities = msj.sort((a:any, b:any) => b.date - a.date)
      this.messagesData = sortedActivities.reverse();
      this.userInfo = msj.find((u: any) => u.sendBy !== 'me');
      this.userMe = msj.find((u: any) => u.sendBy === 'me');
    } 
  }

  //add message to array
  sendMessage():void{
    if(this.message != ""){
      const date = new Date();
      this.messagesData.push({date, img:this.userMe.img , message: this.message, nombre: "test", sendBy: "me"})
      this.message = "";
    }
    
  }
}
