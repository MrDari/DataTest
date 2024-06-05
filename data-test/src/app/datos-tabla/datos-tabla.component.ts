import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-datos-tabla',
  standalone: true,
  imports: [],
  templateUrl: './datos-tabla.component.html',
  styleUrl: './datos-tabla.component.css'
})
export class DatosTablaComponent {

  columnas: string[] = ['Foto','Nombre', 'Apellido', 'Equipo', 'Goles'];
  goleadores!: any[];
  constructor (private dService: DatosService){

  }

  ngOnInit(){
    this.dService.obtenerStats().subscribe( users => {
      this.goleadores= users.response
    }

    )
  }
}
