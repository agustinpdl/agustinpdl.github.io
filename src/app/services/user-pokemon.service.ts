import { Injectable } from '@angular/core';
import { Move, Pokemon } from 'pokenode-ts';
import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class UserPokemonService {
  public set pokemon(p: Pokemon) {
    this._pokemon = p;
    this.pokemonMoveSet = []
    for (let i = 0; i < 4; i++) {
      this._pkApi.getMoveByName(p.moves[i].move.name).then(
        (m) => {
          this.pokemonMoveSet.push(m)
          m.name
        }
      )
    }
  };
  public pokemonMoveSet: Move[] = [];
  private _pokemon?: Pokemon;
  constructor(private _pkApi: PokedexService) { }

}
