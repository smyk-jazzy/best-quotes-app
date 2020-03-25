import { Component, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  showAddForm = false;

  @Output()
  newQuotation = new EventEmitter<Quotation>();

  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0,
  };

  changeShowAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  addQuotation() {
    if (!this.checkQuotation()) {
      alert('Wypełnij wszystkie pola');
      return;
    }
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }

  checkQuotation(): boolean {
    return (
      this.quotation.author.trim() !== '' &&
      this.quotation.sentence.trim() !== ''
    );
  }
}
