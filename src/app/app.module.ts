import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ButtonComponent } from './button/button.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RankButtonsComponent } from './rank-buttons/rank-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    AddFormComponent,
    ButtonComponent,
    ListItemComponent,
    RankButtonsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
