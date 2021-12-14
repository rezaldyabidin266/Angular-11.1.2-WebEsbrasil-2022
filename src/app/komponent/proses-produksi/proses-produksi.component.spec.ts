import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesProduksiComponent } from './proses-produksi.component';

describe('ProsesProduksiComponent', () => {
  let component: ProsesProduksiComponent;
  let fixture: ComponentFixture<ProsesProduksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsesProduksiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsesProduksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
