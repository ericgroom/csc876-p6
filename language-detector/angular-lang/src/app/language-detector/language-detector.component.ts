import { Component, OnInit } from "@angular/core";
import { LanguageAPIService } from "../language-api.service";
import { Subject, Observable } from "rxjs";
import { switchMap, distinctUntilChanged, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-language-detector",
  templateUrl: "./language-detector.component.html",
  styleUrls: ["./language-detector.component.css"]
})
export class LanguageDetectorComponent implements OnInit {
  text: string = "";
  language: string = null;
  searchTerms = new Subject<string>();
  langs$: Observable<string>;

  constructor(private apiService: LanguageAPIService) {}

  ngOnInit() {
    this.langs$ = this.searchTerms.pipe(
      throttleTime(1000),
      distinctUntilChanged(),
      switchMap(term => this.apiService.getLanguage(term))
    );
    this.langs$.subscribe(language => (this.language = language));
  }

  handleChange() {
    this.searchTerms.next(this.text);
  }
}
