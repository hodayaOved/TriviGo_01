import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuestionListComponent } from './ouestion-list.component';

describe('OuestionListComponent', () => {
  let component: OuestionListComponent;
  let fixture: ComponentFixture<OuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuestionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
