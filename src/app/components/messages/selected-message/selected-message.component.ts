import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-selected-message',
  templateUrl: './selected-message.component.html',
  styleUrls: ['./selected-message.component.scss']
})
export class SelectedMessageComponent implements OnInit {
  messagesData: any;
  userInfo: any;

  @Input() set messages(value: any) {
    if (value) {
      this.messagesData = value;
      this.userInfo = value.find((u: any) => u.sendBy == 'me');
      console.log(value);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
