import { TestBed } from '@angular/core/testing';

import { CategoriesForQuestionsService } from './categories-for-questions.service';

describe('CategoriesForQuestionsService', () => {
  let service: CategoriesForQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesForQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
