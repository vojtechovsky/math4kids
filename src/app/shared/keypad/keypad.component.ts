import {Component, OnInit, Input, EventEmitter, Output, HostListener} from '@angular/core';

@Component({
  selector: 'pvo-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  /*
  it specifies the maximum number of integer digits
   */
  @Input()
  public maxLength: number = 3;

  /*
  It sets the number value into component
  2 way data binding!
   */
  @Input()
  get numeric() {
    return Number(this.numericString);
  }

  set numeric(value: number) {
    this.numericString = (value)? String(value): null;
    this.numericChange.emit(value);
  }

  /*
  event handler - numericChange
   */
  @Output() numericChange = new EventEmitter();

  private numericString: string;

  constructor() { }

  ngOnInit() {
  }

  /*
  Add a new number into numeric
   */
  public addNumber(value: number) {

    //if null or two big number
    if ((!this.numericString) || (this.maxLength <= this.numericString.length)) {
      this.numericString = String(value);
    } else {
      this.numericString += value;
    }

    //emit
    this.numeric = Number(this.numericString);
  }

  /*
  It clears the last character of the numeric
   */
  public delete() {

    /* if null return*/
    if (!this.numericString) {
      return
    }

    /*last character => clear*/
    if ((this.numericString) && (this.numericString.length == 1)) {
      this.clear();
      return;
    }


    this.numericString = this.numericString.substring(0, this.numericString.length - 1);
    this.numeric = Number(this.numericString);
  }

  /*
   It clears the last character of the numeric
   */
  public clear() {
    this.numericString = null;
    this.numeric = null;
  }

  /*
  it returns whether the given KeyboardEvent has a number keyCode
   (whether the user clicked on the numeric key)
   */
  private isNumberKeyCode(event: KeyboardEvent) {
    let keyCode = (event.which) ? event.which : event.keyCode;
    return ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))
  }

  /*
  It returns true if the event has KeyCode.KEY_RETURN = 13, otherwise false
   */
  isEnterKeyCode(event: KeyboardEvent) {
    let keyCode = (event.which) ? event.which : event.keyCode;
    return (keyCode===13);
  }

  /*
   It converts KeyboardEvent to a number
   */
  private eventToNumber(event: KeyboardEvent): number {
    if (!this.isNumberKeyCode(event)) {
      return Number.NaN;
    }

    let keyCode = (event.which) ? event.which : event.keyCode;
    return (keyCode > 57) ? keyCode - 96 : keyCode - 48;
  }


  /*
   It handles the keyboard handler
   If the key is number acts as the keypad
   */
  @HostListener('window:keydown', ['$event'])
  public handleKeydown(event: KeyboardEvent) {

    let newNumber = this.eventToNumber(event);

    if (this.isEnterKeyCode(event)) {
      this.onEnterKey.emit("enter pressed!");
      return;
    }

    if (!this.isNumberKeyCode(event)) {
      return;
    }

    this.addNumber(newNumber);
  }


  //onEnterKey
  //custom event for example 09
  /*
  Custom event emitter.
  It emits whenever the user click on enter key
   */
  @Output() public onEnterKey = new EventEmitter<string>();
}
