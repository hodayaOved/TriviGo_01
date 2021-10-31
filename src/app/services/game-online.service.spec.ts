import { TestBed } from '@angular/core/testing';

import { GameOnlineService } from './game-online.service';

describe('GameOnlineService', () => {
  let service: GameOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
