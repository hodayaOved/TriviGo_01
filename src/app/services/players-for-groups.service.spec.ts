import { TestBed } from '@angular/core/testing';

import { PlayersForGroupsService } from './players-for-groups.service';

describe('PlayersForGroupsService', () => {
  let service: PlayersForGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersForGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
