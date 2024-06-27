import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesdemoComponent } from './messagesdemo.component';

describe('MessagesdemoComponent', () => {
  let component: MessagesdemoComponent;
  let fixture: ComponentFixture<MessagesdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
