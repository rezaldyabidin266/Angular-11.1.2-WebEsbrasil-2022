import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKnowComponent } from './product-know.component';

describe('ProductKnowComponent', () => {
  let component: ProductKnowComponent;
  let fixture: ComponentFixture<ProductKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductKnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
