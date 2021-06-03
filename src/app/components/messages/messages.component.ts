import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  selected: boolean = false;
  messages: any;
  private subscription = new Subscription();

  constructor(private data: DataService) { }

  //Add subscription
  ngOnInit(): void {
    const message = this.data.messages$.subscribe(resp => {
      this.messages = resp;
      this.selected = true;
    })
    this.subscription.add(message);
  }

  //finish subscription
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
