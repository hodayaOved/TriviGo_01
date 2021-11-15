import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOnlinComponent } from './chat-onlin.component';

describe('ChatOnlinComponent', () => {
  let component: ChatOnlinComponent;
  let fixture: ComponentFixture<ChatOnlinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatOnlinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatOnlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
