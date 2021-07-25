import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import {SharedModule} from "./shared/shared.module";
import {SearchRepositoriesService} from "./search-repositories.service";
import {BASE_URL, BASE_URL_TOKEN} from "./config";
import {HttpClientModule} from "@angular/common/http";
import { RepositoryCardComponent } from './results/repository-card/repository-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    RepositoryCardComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    SearchRepositoriesService,
    {provide: BASE_URL_TOKEN, useValue: BASE_URL}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
