import { TestBed } from '@angular/core/testing';

import { PlayerSAnswerToQuestionService } from './player-sanswer-to-question.service';

describe('PlayerSAnswerToQuestionService', () => {
  let service: PlayerSAnswerToQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSAnswerToQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
