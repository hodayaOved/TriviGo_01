import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuestionComponent } from './ouestion.component';

describe('OuestionComponent', () => {
  let component: OuestionComponent;
  let fixture: ComponentFixture<OuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
