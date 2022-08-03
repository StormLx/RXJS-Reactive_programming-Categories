import {Component, Input} from '@angular/core';
import {map, switchMap} from "rxjs";
import {ReferencesService} from "../references.service";
import {Domain, FakeDataService} from "../fake-data.service";

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent {

  @Input() domainId!: number;

  domains$ = this.ref.selectedCategory$.pipe(
    switchMap(category =>
      this.data.domains$.pipe(
        map(domains => domains.filter(domain => domain.categoryId === category))
      )));

  constructor(private data: FakeDataService, private ref: ReferencesService) { }

  onSelectDomain(domain: Domain) {
    this.ref.selectDomain(domain.id);
  }

}
