import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVarianRasaComponent } from './product-varian-rasa.component';

describe('ProductVarianRasaComponent', () => {
  let component: ProductVarianRasaComponent;
  let fixture: ComponentFixture<ProductVarianRasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVarianRasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVarianRasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
