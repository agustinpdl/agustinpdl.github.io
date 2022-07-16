import { Component, OnInit } from '@angular/core';
import { UserPokemonService } from 'src/app/services/user-pokemon.service';

@Component({
  selector: 'pokemon-moveset',
  templateUrl: './pokemon-moveset.component.html',
  styleUrls: ['./pokemon-moveset.component.scss']
})
export class PokemonMovesetComponent implements OnInit {

  constructor(public userPokemonService: UserPokemonService) { }

  ngOnInit() {
  }

}
