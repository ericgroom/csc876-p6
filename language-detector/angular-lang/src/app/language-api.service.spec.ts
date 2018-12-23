import { TestBed } from '@angular/core/testing';

import { LanguageAPIService } from './language-api.service';

describe('LanguageAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageAPIService = TestBed.get(LanguageAPIService);
    expect(service).toBeTruthy();
  });
});
