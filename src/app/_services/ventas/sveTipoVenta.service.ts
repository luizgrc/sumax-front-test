import { SveTipoVenta } from './../../_models/ventas/SveTipoVenta';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SveTipoVentaService {

  url: string = `${environment.HOST_VENTAS}/SveTipoVentas`;

  constructor(private http: HttpClient) { }

  findAllByEstado(estado: Boolean){    
    return this.http.get<SveTipoVenta[]>(`${this.url}/findAllByEstado/${estado}`);
  }
}
