import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtondemoComponent } from './buttondemo.component';

describe('ButtondemoComponent', () => {
  let component: ButtondemoComponent;
  let fixture: ComponentFixture<ButtondemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtondemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
