import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  imports: [],
  templateUrl: './propertybinding.html',
  styleUrl: './propertybinding.css'
})
export class Propertybinding {
  liendynamique: string='https://www.google.com'

Friends = {
    image: 'https://m.media-amazon.com/images/M/MV5BMGQwY2YzM2ItNDgxOC00NWMwLTgyZmMtNGEzNDI1ZGQ0YzgwXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_FMjpg_UX1000_.jpg',
    status: 'Online',
    age: '25',
    bio: 'Voici la petite bio de Franklin',
    reputation:'beau gosse'
  };
}
