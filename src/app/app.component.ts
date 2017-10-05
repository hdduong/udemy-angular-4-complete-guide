import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNewOddNumberEvent(event: {aNumber: number}) {
    this.oddNumbers.push(event.aNumber);
  }
  
  onNewEvenNumberEvent(event: {aNumber: number}) {
    this.evenNumbers.push(event.aNumber);
  }
}
