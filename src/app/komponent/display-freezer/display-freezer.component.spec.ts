import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFreezerComponent } from './display-freezer.component';

describe('DisplayFreezerComponent', () => {
  let component: DisplayFreezerComponent;
  let fixture: ComponentFixture<DisplayFreezerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFreezerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFreezerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
