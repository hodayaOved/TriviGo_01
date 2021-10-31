import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGameComponent } from './open-game.component';

describe('OpenGameComponent', () => {
  let component: OpenGameComponent;
  let fixture: ComponentFixture<OpenGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
