import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Chats } from 'src/app/models/chats';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.component.html',
  styleUrls: ['./read-message.component.scss']
})
export class ReadMessageComponent {

  @Input() msj!: Chats;
  @Input() userMe: any;

  constructor() {}
  
}
