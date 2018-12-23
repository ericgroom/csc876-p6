import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { LanguageAPIResponse } from "./LanguageAPIResponse";

const apiKey = "api key";
@Injectable()
export class LanguageAPIService {
  constructor(private http: HttpClient) {}

  getLanguage(text: string): Observable<string> {
    return this.http
      .get<any>(
        `http://apilayer.net/api/detect?access_key=${apiKey}&query=${text}`
      )
      .pipe(
        tap(res => console.log("calling api", res)),
        map(val => val.results[0].language_name),
        catchError(err => of(`bad ${err}`))
      );
  }
}
