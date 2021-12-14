import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHargaComponent } from './menu-harga.component';

describe('MenuHargaComponent', () => {
  let component: MenuHargaComponent;
  let fixture: ComponentFixture<MenuHargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
