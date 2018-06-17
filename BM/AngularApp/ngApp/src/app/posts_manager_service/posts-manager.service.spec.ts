import { TestBed, inject } from '@angular/core/testing';

import { PostsManagerService } from './posts-manager.service';

describe('PostsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsManagerService]
    });
  });

  it('should be created', inject([PostsManagerService], (service: PostsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
