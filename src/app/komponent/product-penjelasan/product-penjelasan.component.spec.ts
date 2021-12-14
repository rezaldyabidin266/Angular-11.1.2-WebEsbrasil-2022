import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPenjelasanComponent } from './product-penjelasan.component';

describe('ProductPenjelasanComponent', () => {
  let component: ProductPenjelasanComponent;
  let fixture: ComponentFixture<ProductPenjelasanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPenjelasanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPenjelasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
