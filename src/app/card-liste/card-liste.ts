import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-liste',
  imports: [FormsModule, CommonModule],
  templateUrl: './card-liste.html',
  styleUrl: './card-liste.css'
})
export class CardListe {
        id:number = Math.random();
        name:string = 'COCO L ASTICOT';
        phone:string = '01234 5678 991';
        email:string = 'coco@lasticot.com';
        premium:boolean = true
}
