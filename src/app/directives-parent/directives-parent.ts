import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-directives-parent',
  imports: [FormsModule,CommonModule],
  templateUrl: './directives-parent.html',
  styleUrl: './directives-parent.css'
})


export class DirectivesParent {

  text:string='Voici les détails du TP';
  statut:boolean = false;
  lesNombres:number[] = [];
  clikk() {
    this.statut = !this.statut;
    this.lesNombres.push(1);
  }

}
