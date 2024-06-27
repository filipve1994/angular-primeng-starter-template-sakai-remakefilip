import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledemoComponent } from './filedemo.component';

describe('FiledemoComponent', () => {
  let component: FiledemoComponent;
  let fixture: ComponentFixture<FiledemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiledemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
