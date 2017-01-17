import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

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
}
