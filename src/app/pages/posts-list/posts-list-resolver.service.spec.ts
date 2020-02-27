import { TestBed } from '@angular/core/testing';

import { PostsListResolverService } from './posts-list-resolver.service';

describe('PostsListResolverService', () => {
  let service: PostsListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
