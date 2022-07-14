import { APP_ID, Component } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';
import { PokedexService } from '../app/services/pokedex.service';
import { ProcessingService } from '../app/services/processing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokeapp';
  constructor(public pokedex: PokedexService, private _pps: ProcessingService) {

  }
  public printpkm(): void {
    console.log('first!');
    this._pps.addPending();
    this.pokedex.getPokemonByName('eevee').then((pk) => {
      console.log(pk);
      this._pps.removePending();
    });
  }
}
