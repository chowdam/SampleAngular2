import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello Messages</h1>
    {{title}}
    <favorite></favorite>
    ` ,
})

export class AppComponent {
  title="Angular App Component";

}
