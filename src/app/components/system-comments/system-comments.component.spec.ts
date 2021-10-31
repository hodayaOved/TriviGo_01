import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCommentsComponent } from './system-comments.component';

describe('SystemCommentsComponent', () => {
  let component: SystemCommentsComponent;
  let fixture: ComponentFixture<SystemCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
