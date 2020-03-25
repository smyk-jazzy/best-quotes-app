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
  showAddForm = false;

  quotations: Quotation[] = QUOTES;
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0,
  };

  changeAddPanelVisibility() {
    if (this.addPanelVisibilityStatus === this.HIDDEN) {
      this.addPanelVisibilityStatus = this.VISIBLE;
    } else {
      this.addPanelVisibilityStatus = this.HIDDEN;
    }
  }

  changeShowAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  checkQuotation(): boolean {
    return this.quotation.author.trim() !== ''
    && this.quotation.sentence.trim() !== '';
  }

  addQuotation() {
    if( !this.checkQuotation()){
      alert('Wypełnij wszystkie pola');
      return;
    }


    this.quotations.unshift(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }
}
