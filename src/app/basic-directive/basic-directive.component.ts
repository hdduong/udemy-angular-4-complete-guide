import { Component } from '@angular/core'

@Component({
    selector: 'app-basic-directive',
    templateUrl: './basic-directive.component.html',
    styleUrls: ['./basic-directive.component.css']
})

export class BasicDirectiveComponent {
    paragrahDisplay: boolean;
    numClick:number = 0;
    numClickRecord = []

    constructor() {
        this.paragrahDisplay = false;
    }

    toggleParagraph() {
        this.paragrahDisplay = !this.paragrahDisplay;

        this.numClick++;
        this.numClickRecord.push(this.numClick);
    }

    toDisplayParagraph() {
        return this.paragrahDisplay;
    }

    getBackgroundColor(noClick) {
        if (noClick >=5)
            return 'blue'
    }
}