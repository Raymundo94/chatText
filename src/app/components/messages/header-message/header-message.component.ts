import { Component, Input, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats';

@Component({
  selector: 'app-header-message',
  templateUrl: './header-message.component.html',
  styleUrls: ['./header-message.component.scss']
})
export class HeaderMessageComponent {
  @Input() userInfo!: Chats;

  constructor() {}

}
