import {Component} from '@angular/core'
import {MessagesService} from './messages.service';

@Component({
  selector: "messages",
  template: `
  <h1>Messages</h1>
  <ul>
    <li *ngFor='let m of messages'>{{m}}

    </li>
  </ul>
  `
})

export class MessagesComponent{
  messages: string[];
  constructor(messagesService: MessagesService){
    this.messages = messagesService.getMessages();

  }

}
