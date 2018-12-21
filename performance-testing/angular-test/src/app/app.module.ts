import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerformanceEvaluationComponent } from './performance-evaluation/performance-evaluation.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceEvaluationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
