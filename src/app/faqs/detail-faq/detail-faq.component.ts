import {Component, OnInit} from '@angular/core';
import {FakeDataService} from "../../fake-data.service";
import {map, switchMap} from "rxjs";
import {ReferencesService} from "../../references.service";

@Component({
  selector: 'app-detail-faq',
  templateUrl: './detail-faq.component.html',
  styleUrls: ['./detail-faq.component.css']
})
export class DetailFaqComponent implements OnInit {

  faq$ = this.ref.selectedFAQ$.pipe(
    switchMap(faqId =>
      this.data.FAQs$.pipe(
        map(faqs => faqs.filter(faq => faq.id === faqId).pop())
      )));

  constructor(private data: FakeDataService, private ref: ReferencesService) { }

  ngOnInit(): void {
  }

}
