import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidstatedemoComponent } from './invalidstatedemo.component';

describe('InvalidstatedemoComponent', () => {
  let component: InvalidstatedemoComponent;
  let fixture: ComponentFixture<InvalidstatedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidstatedemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidstatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
