import { SveEstado } from './../../_models/ventas/SveEstado';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SveEstadoService {

  url: string = `${environment.HOST_VENTAS}/SveEstados`;

  constructor(private http: HttpClient) { }

  listar(){    
    return this.http.get<SveEstado[]>(`${this.url}`);
  }
}
