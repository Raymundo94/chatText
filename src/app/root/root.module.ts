import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { TemplateMessagesComponent } from './template-messages/template-messages.component';


@NgModule({
  declarations: [
    RootComponent,
    TemplateMessagesComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule
  ]
})
export class RootModule { }
