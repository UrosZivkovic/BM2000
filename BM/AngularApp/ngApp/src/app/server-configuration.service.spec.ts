import { TestBed, inject } from '@angular/core/testing';

import { ServerConfigurationService } from './server-configuration.service';

describe('ServerConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerConfigurationService]
    });
  });

  it('should be created', inject([ServerConfigurationService], (service: ServerConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
