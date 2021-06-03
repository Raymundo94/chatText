import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  selected: boolean = false;
  messages: any;
  constructor(private data: DataService,  private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.data.messages$.subscribe(resp => {
      this.spinner.show();
      this.messages = resp;
      this.selected = true;
      this.spinner.hide();

    })
  }

}
