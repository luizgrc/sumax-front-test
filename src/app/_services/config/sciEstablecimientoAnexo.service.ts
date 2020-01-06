import { SciEstablecimientoAnexo } from './../../_models/config/SciEstablecimientoAnexo';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SciEstablecimientoAnexoService {

  url: string = `${environment.HOST_CONFIG}/SciEstablecimientoAnexos`;

  constructor(private http: HttpClient) { }

  findAllByEstado(estado: Boolean){    
    return this.http.get<SciEstablecimientoAnexo[]>(`${this.url}/findAllByEstado/${estado}`);
  }
}
