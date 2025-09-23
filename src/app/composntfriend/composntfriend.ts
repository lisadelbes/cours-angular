import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Exemple sans NGMODEL
// @Component({
//   selector: 'app-mon-input',
//   template: `
//     <label for="input" m-12> Entrez un nom d'ami </label>
//     <input type="text" id="input" style="border: 2px solid #3498db" (keyup)="toto($event)" />
//     <p> {{ tata }}</p>
//   `
// })
// export class MonInputComponent {

//   tata:string="Aucun ami d'écrit..."

//   toto(monevent: KeyboardEvent) {
//     this.tata = (monevent.target as HTMLInputElement).value;
//   }
// }

// exemple avec NGMODEL
@Component({
  imports: [FormsModule, CommonModule],
  template: `
    <label for="input" m-12> Entrez un nom d'ami </label>
    <input type="text" id="input" style="border: 2px solid #3498db" [(ngModel)]="tata" />
    <p>  {{ tata}} </p>
    <div *ngIf="tata === ''; else BlockElse"> Aucun ami ajouté. </div>
    <ng-template #BlockElse> Un ami a été ajouté.</ng-template>
  `


})

export class MonInputComponentBis {
  tata:string=""
}
