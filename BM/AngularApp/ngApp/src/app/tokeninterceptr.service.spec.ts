import { TestBed, inject } from '@angular/core/testing';

import { TokeninterceptrService } from './tokeninterceptr.service';

describe('TokeninterceptrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokeninterceptrService]
    });
  });

  it('should be created', inject([TokeninterceptrService], (service: TokeninterceptrService) => {
    expect(service).toBeTruthy();
  }));
});
