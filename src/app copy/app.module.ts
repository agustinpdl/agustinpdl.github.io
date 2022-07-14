import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPanelComponent } from './modules/common/loading-panel/loading-panel/loading-panel.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingPanelComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
