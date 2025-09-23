import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

// Version sans MGModel
// @Component({
//   selector: 'app-propertybinding',
//   imports: [],
//   templateUrl: './propertybinding.html',
//   styleUrl: './propertybinding.css'
// })
// export class Propertybinding {
//   liendynamique: string='https://www.google.com'

// Friends = {
//     image: 'https://m.media-amazon.com/images/M/MV5BMGQwY2YzM2ItNDgxOC00NWMwLTgyZmMtNGEzNDI1ZGQ0YzgwXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_FMjpg_UX1000_.jpg',
//     status: 'Online',
//     age: '25',
//     bio: 'Voici la petite bio de Franklin',
//     reputation:'beau gosse'
//   };
// }

// Version avec MGModel
@Component({
  selector: 'app-propertybinding',
  imports: [FormsModule, CommonModule],
  templateUrl: './propertybinding.html',
  styleUrl: './propertybinding.css'
})
export class Propertybinding {

    image:string = 'https://m.media-amazon.com/images/M/MV5BMGQwY2YzM2ItNDgxOC00NWMwLTgyZmMtNGEzNDI1ZGQ0YzgwXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_FMjpg_UX1000_.jpg';
    status:string = 'Online';
    age:number = 32;
    bio:string = 'Voici la petite bio de Franklin';
    reputation:string = 'beau gosse';
}




