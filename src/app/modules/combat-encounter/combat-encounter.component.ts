import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { PokedexService } from 'src/app/services/pokedex.service';
import { UserPokemonService } from 'src/app/services/user-pokemon.service';

@Component({
  selector: 'combat-encounter',
  templateUrl: './combat-encounter.component.html',
  styleUrls: ['./combat-encounter.component.scss']
})
export class CombatEncounterComponent implements OnInit {
  userPokemon: Pokemon | null = null;
  userImg: string | null = null;
  enemyPokemon: Pokemon | null = null;

  constructor(private _pkapi: PokedexService, private _pkservice: UserPokemonService) {
    this._pkapi.getPokemonById(1)
      .then((e) => {
        this.userPokemon = e;
        this._pkservice.pokemon = e;
      });
    this._pkapi.getPokemonById(this.generateRandomNumer(1, 880))
      .then((e) => {
        this.enemyPokemon = e;
      });
  }
  public log(p: Pokemon): void {
    const versions = p?.sprites.versions;
    this.userImg = versions['generation-viii'].icons.front_default;
    this.userImg = p?.sprites.back_default;
    console.log(versions)
    console.log(versions['generation-viii'].icons.front_default)
  }
  public generateRandomNumer(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  ngOnInit() {
  }

}
