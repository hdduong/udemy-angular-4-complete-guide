import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  newServerName = '';
  newServerContent = '';

  @Output() serverAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();


  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverAdded.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
 



}
