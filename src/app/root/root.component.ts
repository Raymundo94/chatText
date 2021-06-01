import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { InfoChatsService } from '../services/info-chats.service';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  private subscription = new Subscription();

  constructor(private chats: InfoChatsService, private data: DataService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getChatsActive();
    this.getInfoChat();
  }

  //Get chats active
  getChatsActive(): void {
    const getActive = this.chats.getUsersChat().subscribe(resp => {
      console.log(resp);
      //  this.data.chatActive$.emit(resp);
    }, error => {
      //put error in console for test
      console.log(error);
    });

    this.subscription.add(getActive);
  }

  getInfoChat(): void {
    const getMessages = this.chats.getChats('1').subscribe(resp => {
      console.log(resp);
    }, error => {
      //put error in console for test
      console.log(error);
    });
    //Add subscription 
    this.subscription.add(getMessages);
  }

  //Close all
  ngOnDestroy(): void {
    //delete subscriptions
    this.subscription.unsubscribe();
  }


}
