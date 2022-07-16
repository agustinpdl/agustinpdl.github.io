import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPanelComponent } from '../app/modules/common/loading-panel/loading-panel.component';
import { NavBarComponent } from '../app/modules/nav-bar/nav-bar.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MapComponent } from './modules/map/map.component';
import { CombatEncounterComponent } from './modules/combat-encounter/combat-encounter.component';
import { PokemonMovesetComponent } from './modules/combat-encounter/pokemon-moveset/pokemon-moveset.component';
import { PokemonAttackComponent } from './modules/combat-encounter/pokemon-moveset/pokemon-attack/pokemon-attack.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPanelComponent,
    NavBarComponent,
    MapComponent,
    CombatEncounterComponent,
    PokemonMovesetComponent,
    PokemonAttackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
