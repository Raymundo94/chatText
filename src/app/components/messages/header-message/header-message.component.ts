import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-message',
  templateUrl: './header-message.component.html',
  styleUrls: ['./header-message.component.scss']
})
export class HeaderMessageComponent {
  // name: any;
  @Input() userInfo: any;

  constructor() { }

}
