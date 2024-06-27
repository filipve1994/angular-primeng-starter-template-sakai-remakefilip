import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatlabeldemoComponent } from './floatlabeldemo.component';

describe('FloatlabeldemoComponent', () => {
  let component: FloatlabeldemoComponent;
  let fixture: ComponentFixture<FloatlabeldemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatlabeldemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatlabeldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
