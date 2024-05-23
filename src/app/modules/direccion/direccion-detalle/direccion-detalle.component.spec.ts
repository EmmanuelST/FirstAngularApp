import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionDetalleComponent } from './direccion-detalle.component';

describe('DireccionDetalleComponent', () => {
  let component: DireccionDetalleComponent;
  let fixture: ComponentFixture<DireccionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
