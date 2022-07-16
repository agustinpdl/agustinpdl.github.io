import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProcessingService } from 'src/app/services/processing.service';

@Component({
  selector: 'loading-panel',
  templateUrl: './loading-panel.component.html',
  styleUrls: ['./loading-panel.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', query('.background', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 })),
      ])),
      transition(':leave', query('.background', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out', style({ opacity: 0 })),
      ]))
    ])
  ]
})
export class LoadingPanelComponent implements OnInit, OnDestroy {
  /**
   * Boolean to show or hide processing
   */
  public get loading(): boolean {
    return this._processingCounter > 0;
  }

  private _processingCounter: number = 0;
  /**
   * 
   */
  private _subscription: Subscription = new Subscription;
  /**
   * Basic constructor
   * @param _pps 
   */
  constructor(private _pps: ProcessingService) { }
  /**
   * Angular life cycle hook
   */
  ngOnInit() {
    this._subscription = this._pps.pendingObservable().subscribe((e) => this._processingCounter = e);
  }
  /**
   * remove subscription
   */
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
