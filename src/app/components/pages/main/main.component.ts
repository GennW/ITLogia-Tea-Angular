import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/services/popoup.service';
declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private popupSubscription: Subscription | undefined;

  constructor(private popupService: PopupService) { 
  }

  ngOnInit(): void {
    // активируем аккордеон
    $("#accordion").accordion({ heightStyle: "content" });

    // Показать попап по истечении задержки
    const delayInSeconds = 10;
    this.popupSubscription = this.popupService.showPopupAfterDelay(delayInSeconds)
    .subscribe(() => {
      $('#exampleModal').modal('show');
    });
  }

  ngOnDestroy(): void {
    if (this.popupSubscription) {
      this.popupSubscription.unsubscribe();
    }
  }

}
