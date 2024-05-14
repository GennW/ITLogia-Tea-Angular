import { Component, OnDestroy, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor() { 
  }

  ngOnInit(): void {
    // активируем аккордеон
    $("#accordion").accordion({ heightStyle: "content" });

  }

  ngOnDestroy(): void {
    
  }

}
