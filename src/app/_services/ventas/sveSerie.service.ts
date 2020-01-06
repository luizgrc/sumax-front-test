import { SveSerie } from './../../_models/ventas/SveSerie';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SveSerieService {

  url: string = `${environment.HOST_VENTAS}/SveSeries`;

  constructor(private http: HttpClient) { }

  findAllByEstado(estado: Boolean){    
    return this.http.get<SveSerie[]>(`${this.url}/findAllByEstado/${estado}`);
  }

  findAllByEstadoAndSveTipoComprobante(estado: Boolean, idTipoComprobante: number){    
    return this.http.get<SveSerie[]>(`${this.url}/findAllByEstadoAndSveTipoComprobante/${estado}/${idTipoComprobante}`);
  }
}
