import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible globalement
})
export class PokemonService {
  private apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1';

  async fetchPokemonList(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const data = await response.json();
      return data; // tu peux typer ça plus tard si tu veux
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémon :', error);
      throw error; // important pour propager l'erreur
    }  }
}