import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { NotSelectComponent } from '../components/messages/not-select/not-select.component';
import { SelectedMessageComponent } from '../components/messages/selected-message/selected-message.component';
import { ReadMessageComponent } from '../components/messages/read-message/read-message.component';
import { HeaderMessageComponent } from '../components/messages/header-message/header-message.component';
import { UserChatComponent } from '../components/sidebar/user-chat/user-chat.component';
import { ListMessageComponent } from '../components/sidebar/list-message/list-message.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { MsjPipe } from '../pipes/msj.pipe';

@NgModule({
  declarations: [
    RootComponent,
    SidebarComponent,
    MessagesComponent,
    ListMessageComponent,
    NotSelectComponent,
    SelectedMessageComponent,
    UserChatComponent,
    ReadMessageComponent,
    HeaderMessageComponent,
    MsjPipe
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    NgxSpinnerModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RootModule { }
