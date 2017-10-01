import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServerEnabled: boolean = false;
  serverCreatedStatus: string = "No Server created";
 
  constructor() { 
    setTimeout( () => {
      this.addServerEnabled = true;
    }, 2000);

  }

  ngOnInit() {
  }
  
  onAddServerCreated() {
    this.serverCreatedStatus = "Server created";
  }
}
