import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-message',
  templateUrl: './selected-message.component.html',
  styleUrls: ['./selected-message.component.scss']
})
export class SelectedMessageComponent{
  messagesData: any;
  userInfo: any;
  @Input() set messages(value: any) {
    if (value) {
      let msj:any = value;
      msj.forEach((element:any) => {
        element.date = new Date(element.date);
      });
      const sortedActivities = msj.sort((a:any, b:any) => b.date - a.date)
      console.log(sortedActivities);
      this.messagesData = sortedActivities.reverse();
      this.userInfo = msj.find((u: any) => u.sendBy == 'me');
    }
  }
}
