import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Chats } from '../models/chats';
import { CountChats } from '../models/count-chats';
import { Users } from '../models/users';
import { DataService } from '../services/data.service';
import { InfoChatsService } from '../services/info-chats.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  chatsInfo: Users[] = [];

  constructor(private chats: InfoChatsService, private data: DataService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.getChatsActive();
    this.getInfoChat();
  }

  //Get chats active
  getChatsActive(): void {
    const getActive = this.chats.getUsersChat().subscribe((users: Users[]) => {
      this.chatsInfo = users;
      this.data.chatActive$.emit(users);
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
      const getMessages = this.chats.getChats(id).subscribe((chats:Chats[]) => {
        chats.forEach((element: any) => {
          if (element.sendBy == 'me') {
            element.img = '/assets/images/avatars/12.jpg';
            element.nombre = usr!.name;
          } else {
            let usr2 = this.chatsInfo.find((u: any) => u.id === element.sendBy);
            element.img = usr2!.profile;
            element.nombre = usr!.name;
          }
        });
        this.data.messages$.emit(chats);
        this.spinner.hide();
        getMessages.unsubscribe()
      }, _error => {
        //Add modals of error
      });
    })
    this.subscription.add(userId);
  }
  //get number of messages
  getCount(): void {
    this.getNumberInfo();
    setTimeout(() => {
      this.getChatsActive()
    }, 60000);
  }

  //get service count messages
  getNumberInfo(): void {
    const getCount = this.chats.getCountMessage().subscribe((count: CountChats[]) => {
      this.data.countChat$.emit(count);
      getCount.unsubscribe();
    }, error => {
      //Add modals of error
      console.log(error);
    })
  }
  //Close all
  ngOnDestroy(): void {
    //delete subscriptions
    this.subscription.unsubscribe();
  }

}
