import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaysdemoComponent } from './overlaysdemo.component';

describe('OverlaysdemoComponent', () => {
  let component: OverlaysdemoComponent;
  let fixture: ComponentFixture<OverlaysdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlaysdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlaysdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
