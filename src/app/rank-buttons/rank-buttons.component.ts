import { Component,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rank-buttons',
  templateUrl: './rank-buttons.component.html',
  styleUrls: ['./rank-buttons.component.css'],
})
export class RankButtonsComponent {

  @Output()
  valueEmiter = new EventEmitter<number>();
}
