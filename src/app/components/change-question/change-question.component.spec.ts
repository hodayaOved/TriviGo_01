import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeQuestionComponent } from './change-question.component';

describe('ChangeQuestionComponent', () => {
  let component: ChangeQuestionComponent;
  let fixture: ComponentFixture<ChangeQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
