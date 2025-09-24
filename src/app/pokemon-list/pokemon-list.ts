import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})

export class PokemonList {
  title:string='apiData';
  newData:any;
  constructor(private pokemonService:PokemonService){}

async ngOnInit() {
  try {
    this.newData = await this.pokemonService.fetchPokemonList();
    // console.log(this.newData);
    // console.log(this.newData[0].name.fr); // exemple pour afficher le nom FR du 1er Pokémon
  } catch (error) {
    console.error(error);
  }
}

}