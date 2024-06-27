import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsdemoComponent } from './panelsdemo.component';

describe('PanelsdemoComponent', () => {
  let component: PanelsdemoComponent;
  let fixture: ComponentFixture<PanelsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelsdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
