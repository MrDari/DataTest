import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private apiUrl = 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=140&season=2023';

  constructor(private http: HttpClient) { }

  obtenerStats(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'c088b8541fmshfa41ddf1da664e1p19b8cejsn22b5892d684a'
    });
    return this.http.get<any>(this.apiUrl, { headers })

  }
}
