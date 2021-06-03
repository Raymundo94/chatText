import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { InfoChatsService } from '../services/info-chats.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy{

  private subscription = new Subscription();
  chatsInfo: any;

  constructor(private chats: InfoChatsService, private data: DataService, private httpClient: HttpClient) {
  }

  ngOnInit():void {
    this.getChatsActive();
    this.getInfoChat();
  }

  //Get chats active
  getChatsActive(): void {
    const getActive = this.chats.getUsersChat().subscribe(resp => {
      this.chatsInfo = resp;
      this.data.chatActive$.emit(resp);
      this.getCount();
    }, error => {
      console.log(error);
    });
    this.subscription.add(getActive);
  }

  //Get messages of one user
  getInfoChat(): void {
    const userId = this.data.userId$.subscribe((id: string) => {
      let usr = this.chatsInfo.find((u: any) => u.id === id);
      let user = { name: usr.name, img: usr.profile }
      const getMessages = this.chats.getChats(id).subscribe(chats => {
        chats.forEach((element: any) => {
          if (element.sendBy == 'me') {
            element.img = usr.profile;
            element.nombre = usr.name;
          } else {
            let usr2 = this.chatsInfo.find((u: any) => u.id === element.sendBy);
            element.img = usr2.profile;
            element.nombre = usr.name;
          }
        });
        this.data.messages$.emit(chats);
        getMessages.unsubscribe()
      }, error => {
        console.log(error);
      });
    })
    this.subscription.add(userId);
  }

  //Close all
  ngOnDestroy(): void {
    //delete subscriptions
    this.subscription.unsubscribe();
  }

  //get number of messages
  getCount(): void {
    this.getNumberInfo();
    setTimeout(() => {
      this.getNumberInfo();
    }, 60000);
  }

  //get service count messages
  getNumberInfo(): void {
    const getCount = this.chats.getCountMessage().subscribe(resp => {
      this.data.countChat$.emit(resp);
      getCount.unsubscribe();
    }, error => {
      console.log(error);
    })
  }
}
