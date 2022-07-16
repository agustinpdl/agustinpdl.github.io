import { Injectable } from '@angular/core';
import { Move, MoveClient, Pokemon, PokemonClient } from 'pokenode-ts';
import { ProcessingService } from './processing.service';

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
  public constructor(private _processing: ProcessingService) { }
  /**
   * Get Pokemon by name
   * @param name 
   * @returns 
   */
  public async getPokemonByName(name: string): Promise<Pokemon> {
    this._processing.addPending();
    return await this.pokemon.getPokemonByName(name).finally(() => this._processing.removePending());
  }
  public async getPokemonById(id: number): Promise<Pokemon> {
    this._processing.addPending();
    return await this.pokemon.getPokemonById(id).finally(() => this._processing.removePending());;
  }
  public async getMoveByName(name: string): Promise<Move> {
    this._processing.addPending();
    return await this.move.getMoveByName(name).finally(() => this._processing.removePending());;
  }
}
