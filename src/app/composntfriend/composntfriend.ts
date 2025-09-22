import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-input',
  template: `
    <input type="text" style="border: 2px solid #3498db" (keyup)="toto($event)" />
    <p> {{ tata }}</p>
  `
})
export class MonInputComponent {

  tata:string="Aucun ami d'écrit..."

  toto(monevent: KeyboardEvent) {
    this.tata = (monevent.target as HTMLInputElement).value;
  }
}


