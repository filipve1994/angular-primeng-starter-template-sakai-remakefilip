import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsdemoComponent } from './chartsdemo.component';

describe('ChartsdemoComponent', () => {
  let component: ChartsdemoComponent;
  let fixture: ComponentFixture<ChartsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
