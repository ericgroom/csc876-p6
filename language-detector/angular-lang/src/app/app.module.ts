import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LanguageAPIService } from "./language-api.service";
import { AppComponent } from "./app.component";
import { LanguageDetectorComponent } from "./language-detector/language-detector.component";

@NgModule({
  declarations: [AppComponent, LanguageDetectorComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [LanguageAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
