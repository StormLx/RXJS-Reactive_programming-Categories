import {Component, Input} from '@angular/core';
import {map, of, switchMap} from "rxjs";
import {FakeDataService, FAQ} from "../fake-data.service";
import {ReferencesService} from "../references.service";

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {

  @Input() faqId!: number;

  FAQs$ = this.ref.selectedDomain$.pipe(
    switchMap(domain =>
      domain ?
        this.data.FAQs$.pipe(
          map(FAQs => FAQs.filter(FAQ => FAQ.domainId === domain)))
        : of([])
    ));

  selectedFAQ$ = this.ref.selectedFAQ$;

  constructor(private data: FakeDataService, private ref: ReferencesService) { }

  onSelectFAQ(faq: FAQ) {
    this.ref.selectFAQ(faq.id);
  }
}
