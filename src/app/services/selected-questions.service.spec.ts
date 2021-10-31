import { TestBed } from '@angular/core/testing';

import { SelectedQuestionsService } from './selected-questions.service';

describe('SelectedQuestionsService', () => {
  let service: SelectedQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
