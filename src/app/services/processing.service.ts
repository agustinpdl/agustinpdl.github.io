import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {
  /**
   * Number of pending processes
   */
  private _pendingAmount: BehaviorSubject<number> = new BehaviorSubject(0);
  /**
   * Default constructor
   */
  constructor() { }
  /**
   * Add pending process
   */
  public addPending(): void {
    this._pendingAmount.next(this._pendingAmount.getValue() + 1);
  }
  /**
   * Remove pending process
   */
  public removePending(): void {
    const nextVal = this._pendingAmount.getValue() - 1 >= 0 ? this._pendingAmount.getValue() - 1 : 0
    this._pendingAmount.next(nextVal);
  }
  /**
   * Force remove all pending processes
   */
  public clearAllPending(): void {
    this._pendingAmount.next(0);
  }
  /**
   * Exposed observable of the processing stream
   */
  public pendingObservable(): Observable<number> {
    return this._pendingAmount.asObservable();
  }
}
