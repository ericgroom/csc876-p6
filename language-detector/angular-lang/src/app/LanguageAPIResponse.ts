export class LanguageAPIResponse {
  languageName: string;
  private response: ResponseFormat;

  constructor(response: ResponseFormat) {
    this.languageName = response.results[0].language_name;
  }
}

interface ResponseFormat {
  results: ResponseInstance[];
}

interface ResponseInstance {
  language_name: string;
}
