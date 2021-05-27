import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';
import { TemplateMessagesComponent } from './template-messages/template-messages.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent
  },
  {
    path: 'template-messages',
    component: TemplateMessagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
