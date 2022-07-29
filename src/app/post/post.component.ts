import { Component, Input, EventEmitter, Output } from '@angular/core';
/**
 * By creating a event emitter, we can send data via the events on the browser
 * And apply a string generic to the event 
 * 
 * Events are a binary way to send data from parent to child
 * data emitted from an event is stored within the $event var
 * 
 * :19 is using an alias for input of post image, the angular 
 * docs say to avoid using aliases on inputs and output.
 * 
 * 
 * 
 */

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input('img') postImg = ''
  @Output() imgSelected = new EventEmitter<string>() // this creates our event to emit
}
 