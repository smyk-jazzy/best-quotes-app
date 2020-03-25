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

  changeAddPanelVisibility() {
    if (this.addPanelVisibilityStatus === this.HIDDEN) {
      this.addPanelVisibilityStatus = this.VISIBLE;
    } else {
      this.addPanelVisibilityStatus = this.HIDDEN;
    }
  }

  changeShowAddForm(){
    this.showAddForm = !this.showAddForm;
  }

}
