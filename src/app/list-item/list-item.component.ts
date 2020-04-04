import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent  {
  @Input()
  item: Quotation;
  @Input()
  odd: boolean;

  @Output()
  valueEvent = new EventEmitter<number>();
}
