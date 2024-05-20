// popup.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  public popupShown = new Subject<true>();
  private isShow: boolean = true;
  private timer: any;

  showPopupAfterDelay(delayInSeconds: number) {
    if (this.isShow) {
     this.timer = setTimeout(() => {
        this.popupShown.next(true);
        this.popupShown.complete();
        this.isShow = false;
      }, delayInSeconds * 1000);
    }
  }

  deleteTimer() {
    clearTimeout(this.timer);
    this.isShow = false;

  }
}
