import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DatosGraficoModule } from './datos-grafico/datos-grafico.module';
import { DatosTablaModule } from './datos-tabla/datos-tabla.module';
import { DatosTablaComponent } from './datos-tabla/datos-tabla.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';



@NgModule({
  providers: [
    provideHttpClient(),
  ],
  declarations: [],
  imports: [
    CommonModule,
    DatosTablaModule,
    DatosGraficoModule,
    AppComponent,
  ]
})
export class AppModule { }
