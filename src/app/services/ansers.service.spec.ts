import { TestBed } from '@angular/core/testing';

import { AnsersService } from './ansers.service';

describe('AnsersService', () => {
  let service: AnsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
