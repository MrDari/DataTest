import { Routes } from '@angular/router';
import { DatosGraficoComponent } from './datos-grafico/datos-grafico.component';
import { DatosTablaComponent } from './datos-tabla/datos-tabla.component';

export const routes: Routes = [

  { path: 'datos', component: DatosTablaComponent },
  { path: 'grafico', component: DatosGraficoComponent },
];
