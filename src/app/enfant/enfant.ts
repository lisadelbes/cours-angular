import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css'
})
export class Enfant {

  @Input() message: string='';
  @Input() counter: number=0;

  // ? @Input c'est l'Equivalent des PROPS sur les autre frameworks
  // !Déclarer propriété obligatoire (cela ne peut pas être undefined)
  // @Input() message!: string;
  // @Input() counter!: number;
  // ?phase 1 : Ici on déclare notre prore Event
  @Output() notify = new EventEmitter<string>();

  // !Déclarer propriété optionnelle avec ? (cela peut être undefined)
  // @Input() message?: string;
  // @Input() counter?: number;
  //! Déclarer propriété avec valeur par défaut (Faut être sûr que ca sera pas undefined)

  notifyParent() {
    // ? phase 2 : On fais l'emmission de
    // ! Emmission de l'event custom avec counter dedans
    this.notify.emit(`Counter is now from enfant: ${this.counter}`);
}

}
