import { TestBed, inject } from '@angular/core/testing';

import { FakePostsManagerService } from './fake-posts-manager.service';

describe('FakePostsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakePostsManagerService]
    });
  });

  it('should be created', inject([FakePostsManagerService], (service: FakePostsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
