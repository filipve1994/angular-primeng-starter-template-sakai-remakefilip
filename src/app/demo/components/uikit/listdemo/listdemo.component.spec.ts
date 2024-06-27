import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemoComponent } from './listdemo.component';

describe('ListdemoComponent', () => {
  let component: ListdemoComponent;
  let fixture: ComponentFixture<ListdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
