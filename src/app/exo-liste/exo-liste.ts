import { Component } from '@angular/core';
import { CardListe } from '../card-liste/card-liste';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exo-liste',
  imports: [CardListe, FormsModule, CommonModule],
  templateUrl: './exo-liste.html',
  styleUrl: './exo-liste.css'
})
export class ExoListe {

inputNameFriend:string=''

lesAmis = [
    {
        id: 1,
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 2,
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 3,
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 4,
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
  ];

  addAFriend(){
    this.lesAmis.push(
      {
      id:Math.random(),
      name:'Dupont',
      phone:'0596874159',
      email: 'jean.dupont@example.com',
      premium: true 
    }
  )
  }

}


