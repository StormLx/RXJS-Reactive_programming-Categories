import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  private selectedCategorySubject = new BehaviorSubject<number>(0);
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  private selectedDomainSubject = new BehaviorSubject<number>(0);
  selectedDomain$ = this.selectedDomainSubject.asObservable();

  private selectedFAQSubject = new BehaviorSubject<number>(0);
  selectedFAQ$ = this.selectedFAQSubject.asObservable();

  cardsIds$ = combineLatest([this.selectedCategory$, this.selectedDomain$, this.selectedFAQ$]).pipe(
    map(([category, domain, faq]) => ({category, domain, faq}))
  );

  selectCategory(categoryId: number): void {
    this.selectedCategorySubject.next(categoryId);
  }

  selectDomain(domainId: number): void {
    this.selectedDomainSubject.next(domainId);
  }

  selectFAQ(faqId: number): void {
    this.selectedFAQSubject.next(faqId);
  }

  getCardsIds(): Observable<any> {
    return this.cardsIds$;
  }
}
