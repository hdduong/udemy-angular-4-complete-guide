import { Component } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})

export class BindingComponent {
    username:string = '';

    isUsernameEmpty() {
        return this.username === '';
    }

    onBtnAddClick(event: Event) {
        this.username = "";
    }
}