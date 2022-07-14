import { Injectable } from '@angular/core';
import { Pokemon, PokemonClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  /**
   * API CONNECTION
   */
  private api = new PokemonClient();
  /**
   * Default constructor
   */
  public constructor() { }
  /**
   * Get Pokemon by name
   * @param name 
   * @returns 
   */
  public async getPokemonByName(name: string): Promise<Pokemon | void> {
    console.log("got in!")
    return await this.api.getPokemonByName(name).catch((err) => console.error(err));
  }
}
