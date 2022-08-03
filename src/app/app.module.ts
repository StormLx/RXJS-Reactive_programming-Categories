import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoriesComponent } from './categories/categories.component';
import { DomainsComponent } from './domains/domains.component';
import { FaqsComponent } from './faqs/faqs.component';
import { DetailFaqComponent } from './faqs/detail-faq/detail-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DomainsComponent,
    FaqsComponent,
    DetailFaqComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
