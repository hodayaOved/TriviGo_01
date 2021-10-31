import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaterorisToChooseComponent } from './cateroris-to-choose.component';

describe('CaterorisToChooseComponent', () => {
  let component: CaterorisToChooseComponent;
  let fixture: ComponentFixture<CaterorisToChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaterorisToChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterorisToChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
