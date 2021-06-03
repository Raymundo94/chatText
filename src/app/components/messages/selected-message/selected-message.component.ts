import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-selected-message',
  templateUrl: './selected-message.component.html',
  styleUrls: ['./selected-message.component.scss']
})
export class SelectedMessageComponent {
  messagesData: any;
  userInfo: any;
  userMe: any;
  message:any;
  messagesContainerRef!: ElementRef;

  constructor(){
  }

  // chat-content
  @Input() set messages(value: any) {
    if (value) {
      let msj:any = value;
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
