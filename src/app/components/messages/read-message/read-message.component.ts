import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.component.html',
  styleUrls: ['./read-message.component.scss']
})
export class ReadMessageComponent implements OnInit {

  @Input() msj: any;
  userId: any;
  chats: any;

  constructor(private data: DataService) { }
  ngOnInit(): void {
  }

}
