import { 
  Component, 
  Input, 
  EventEmitter, 
  Output, 
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
/**
 * 
 * EVENT EMITTER
 * -------------
 * By creating a event emitter, we can send data via the events on the browser
 * And apply a string generic to the event 
 * 
 * Events are a binary way to send data from parent to child
 * data emitted from an event is stored within the $event var
 * 
 * INPUT/OUTPUT ALIASES (good to know)
 * :19 is using an alias for input of post image, the angular 
 * docs say to avoid using aliases on inputs and output.
 * 
 * CONTENT PROJECTION
 * ------------------
 * Content projection is the process of loading content inserted into a components tag
 * 
 * INTERFACES
 * ------------
 * You can add multiple interfaces to a class by implementing them
 * 
 * HOOKS
 * ------------
 * Commonly used hooks: constructor(), ngOnInit(), ngOnChanges(), ngOnDestroy()
 * 
 * Hooks that run more than once can IMPACT the performance of your app
 * 
 * View VS Content
 * ---------------
 * - The view refers to the component's template
 * - The content refers to the projected content from the parent component
 * 
 *    NOTE: Angular processes both content separaretly
 * 
 * 
 * 
 */

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>(); // this creates our event to emit

  constructor() {
    console.log('construtor() called');
  }

  ngOnInit() {
    // interfaces are better to use within components instead of adding items here
    console.log('ngOnInit() called', this.postImg);
  }

  // Runs when there is a change made, such as a change to the input URL
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges()' );
  }

  // runs after angular change detection cycle runs, rarely used but useful for detecting changes that angular might miss 
  ngDoCheck(): void {
      console.log('ngDoCheck() called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy() called');
  }

}
 