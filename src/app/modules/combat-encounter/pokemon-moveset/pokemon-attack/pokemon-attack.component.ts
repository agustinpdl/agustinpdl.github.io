import { Component, Input, OnInit } from '@angular/core';
import { Move, PokemonMove } from 'pokenode-ts';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'pokemon-attack',
  templateUrl: './pokemon-attack.component.html',
  styleUrls: ['./pokemon-attack.component.scss']
})
export class PokemonAttackComponent implements OnInit {
  @Input() public move: Move | null = null;
  public get name(): string | undefined {
    return this.move?.names.find((name) => name.language.name == 'es')?.name;
  }
  constructor(private _pkApi: PokedexService) {
  }

  ngOnInit() {
  }
  public registerAttack(): void {
    console.log(this.move)
  }
}
