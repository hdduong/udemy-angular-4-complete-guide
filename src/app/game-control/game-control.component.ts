import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() oddNumberEvent = new EventEmitter<{aNumber: number}>();
  @Output() evenNumberEvent = new EventEmitter<{aNumber: number}>();

  currentNumber: number = 0;
  intervalRef;

  constructor() {
  }

  ngOnInit() {
  }
  
  onStartClick() {  
    this.intervalRef = setInterval(() => {
      this.currentNumber++;
      
      if (this.currentNumber % 2) {
        this.oddNumberEvent.emit({aNumber: this.currentNumber});
      } else {
        this.evenNumberEvent.emit({aNumber: this.currentNumber});
      }
    }, 1000);
  }
  

  onStopClick() {
   // reset all numbers
   this.currentNumber = 0;
   clearInterval(this.intervalRef);
  }
}
