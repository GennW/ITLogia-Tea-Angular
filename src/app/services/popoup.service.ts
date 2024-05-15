// popup.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupShown = new Subject<void>();

  showPopupAfterDelay(delayInSeconds: number): Observable<void> {
    setTimeout(() => {
      this.popupShown.next();
      this.popupShown.complete();
    }, delayInSeconds * 1000);

    return this.popupShown.asObservable();
  }
}
