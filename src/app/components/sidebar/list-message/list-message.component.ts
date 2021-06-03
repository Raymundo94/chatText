import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.scss']
})
export class ListMessageComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  users: any;
  count: any;
  serviceMessage: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getChatActive();
  }
  //Get chat active
  getChatActive(): void {
    const activeChats = this.data.chatActive$.subscribe(resp => {
      let msj: any = resp;
      msj.forEach((element: any) => {
        element.lastMessage = new Date(element.lastMessage);
      });
      this.serviceMessage = msj.sort((a: any, b: any) => (b.lastMessage - a.lastMessage)).reverse();
      this.getCountMessage();
    }, error => {
      console.log(error);
    })
    this.subscription.add(activeChats);
  }
  //get number of messages
  getCountMessage(): void {
    const countChats = this.data.countChat$.subscribe(resp => {
      this.count = resp;
      this.count.forEach((count: any) => {
        this.serviceMessage.forEach((user: any) => {
          if (count.userId === user.id) {
            user.count = count.totalUnread
          }
        });
      });
      //order messages
      this.serviceMessage.sort((a:any) => a.count).reverse();
      this.users = this.serviceMessage;
    }, error => {
      console.log(error);
    })
    this.subscription.add(countChats);
  }

  //Close all
  ngOnDestroy(): void {
    //delete subscriptions
    this.subscription.unsubscribe();
  }



}
