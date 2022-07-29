import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Ayo, take me out to dinner</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})

export class AppComponent {
  name = 'Adam'
  imgUrl = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'

  getName() {
    return this.name;
  }
}