import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbAccordionConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popoup.service';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  private popupSubscription: Subscription | undefined;
  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  constructor(
    private popupService: PopupService,
    private modalService: NgbModal,
    private config: NgbAccordionConfig
  ) {}

  ngOnInit(): void {
    this.config.closeOthers = true;
    this.config.type = 'info';
  }
  ngAfterViewInit(): void {
    // Показать попап по истечении задержки
    const delayInSeconds = 3;
    this.popupService.showPopupAfterDelay(delayInSeconds);
    this.popupSubscription = this.popupService.popupShown.subscribe((data) => {
      if (data) {
        this.openModal();
      } else {
        console.log('Hе верная data', data)
      }
    });
  }

  openModal() {
    const modalRef = this.modalService.open(this.popup);
  }

  ngOnDestroy(): void {
    if (this.popupSubscription) {
      this.popupSubscription.unsubscribe();
      this.popupService.deleteTimer();
    }
  }
}
