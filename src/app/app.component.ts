import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  HIDDEN = 'hidden';
  VISIBLE = 'visible';
  addPanelVisibilityStatus = this.HIDDEN;

  quotations: Quotation[] = QUOTES;

  changeAddPanelVisibility() {
    if (this.addPanelVisibilityStatus === this.HIDDEN) {
      this.addPanelVisibilityStatus = this.VISIBLE;
    } else {
      this.addPanelVisibilityStatus = this.HIDDEN;
    }
  }

  onNewQuotation(quotation: Quotation) {
    this.quotations.unshift(quotation);
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
  bestQuotes(): Quotation[] {
    return this.quotations.filter(item => item.votes > 0);
  }

  worstQuotes(): Quotation[] {
    return this.quotations.filter(item => item.votes < 0);
  }
}
