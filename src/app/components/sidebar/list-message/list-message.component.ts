import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.scss']
})
export class ListMessageComponent implements OnInit {

  private subscription = new Subscription();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getChatActive();
  }
  //Get chat active
  getChatActive() {
    const activeChats = this.data.chatActive$.subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    })
    this.subscription.add(activeChats);
  }

  //Close all
  ngOnDestroy(): void {
    //delete subscriptions
    this.subscription.unsubscribe();
  }



}
