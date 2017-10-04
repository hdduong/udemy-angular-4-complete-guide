import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'appServer', content:"test app server"}];

  onServerAdded(severData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
         type: 'server',
         name: severData.serverName,
         content: severData.serverContent
       });
   }
 
   onBlueprintAdded(severData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: severData.serverName,
      content: severData.serverContent
    });
   }

}
