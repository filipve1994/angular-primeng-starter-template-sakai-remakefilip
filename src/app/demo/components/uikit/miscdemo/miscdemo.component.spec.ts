import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscdemoComponent } from './miscdemo.component';

describe('MiscdemoComponent', () => {
  let component: MiscdemoComponent;
  let fixture: ComponentFixture<MiscdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
