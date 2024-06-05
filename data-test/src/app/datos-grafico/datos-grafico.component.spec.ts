import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGraficoComponent } from './datos-grafico.component';

describe('DatosGraficoComponent', () => {
  let component: DatosGraficoComponent;
  let fixture: ComponentFixture<DatosGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosGraficoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
