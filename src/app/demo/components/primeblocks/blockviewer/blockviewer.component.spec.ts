import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockviewerComponent } from './blockviewer.component';

describe('BlockviewerComponent', () => {
  let component: BlockviewerComponent;
  let fixture: ComponentFixture<BlockviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
