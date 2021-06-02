import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header-message',
  templateUrl: './header-message.component.html',
  styleUrls: ['./header-message.component.scss']
})
export class HeaderMessageComponent {
  // name: any;
  @Input() userInfo: any;

  constructor(private data: DataService) { }

}
