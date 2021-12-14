import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokasiCarouselComponent } from './lokasi-carousel.component';

describe('LokasiCarouselComponent', () => {
  let component: LokasiCarouselComponent;
  let fixture: ComponentFixture<LokasiCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokasiCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokasiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
