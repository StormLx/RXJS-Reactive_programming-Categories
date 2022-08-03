import {Component} from '@angular/core';
import {ReferencesService} from "./references.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardsIds$ = this.ref.getCardsIds();

  constructor(private ref: ReferencesService) {
  }
}
