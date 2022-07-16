import { Injectable } from '@angular/core';
import { Move, MoveClient, Pokemon, PokemonClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  /**
   * API CONNECTION TO POKEMON CLIENT
   */
  private pokemon = new PokemonClient();
  /**
   * API CONNECTION TO POKEMON CLIENT
   */
  private move = new MoveClient();
  /**
   * Default constructor
   */
  public constructor() { }
  /**
   * Get Pokemon by name
   * @param name 
   * @returns 
   */
  public async getPokemonByName(name: string): Promise<Pokemon> {
    return await this.pokemon.getPokemonByName(name);
  }
  public async getPokemonById(id: number): Promise<Pokemon> {
    return await this.pokemon.getPokemonById(id);
  }
  public async getMoveByName(name: string): Promise<Move> {
    return await this.move.getMoveByName(name);
  }
}
