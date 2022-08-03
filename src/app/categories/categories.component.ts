import {Component, Input} from '@angular/core';
import {Category, FakeDataService} from "../fake-data.service";
import {ReferencesService} from "../references.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Input() categoryId!: number;

  categories$ = this.data.categories$;

  constructor(private data: FakeDataService, private ref: ReferencesService) { }

  onSelectCategory(category: Category): void {
    this.ref.selectCategory(category.id);
    this.ref.selectDomain(0);
  }

}
