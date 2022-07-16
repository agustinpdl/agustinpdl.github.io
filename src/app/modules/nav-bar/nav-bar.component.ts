import { Component, OnInit } from '@angular/core';
import { ProcessingService } from 'src/app/services/processing.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private _processing: ProcessingService) { }

  ngOnInit() {
    
  }
  public async load() {
    this._processing.addPending();
    await this.delay(3000).then(() => this._processing.removePending());

  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
