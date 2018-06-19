import { TestBed, inject } from '@angular/core/testing';

import { FormeService } from './forme.service';

describe('FormeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormeService]
    });
  });

  it('should be created', inject([FormeService], (service: FormeService) => {
    expect(service).toBeTruthy();
  }));
});
