import { TestBed } from '@angular/core/testing';

import { SystemCommentsService } from './system-comments.service';

describe('SystemCommentsService', () => {
  let service: SystemCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
