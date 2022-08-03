import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay} from "rxjs";

export interface Category {
  id: number;
  name: string;
}

export interface Domain {
  id: number;
  categoryId: number;
  name: string;
}

export interface FAQ {
  id: number;
  domainId: number;
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  categories$ = this.http.get<Category[]>('./assets/categories.json').pipe(shareReplay(1));
  domains$ = this.http.get<Domain[]>('./assets/domains.json').pipe(shareReplay(1));
  FAQs$ = this.http.get<FAQ[]>('./assets/faqs.json').pipe(shareReplay(1));

  constructor(private http: HttpClient) {
  }

}
