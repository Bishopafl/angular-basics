import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Ayo, take me out to dinner</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})

export class AppComponent {
  name = "Adam"

  getName() {
    return this.name;
  }
}