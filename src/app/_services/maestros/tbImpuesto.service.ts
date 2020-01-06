import { TbImpuesto } from './../../_models/maestros/TbImpuesto';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TbImpuestoService {

  url: string = `${environment.HOST_MAESTROS}/TbImpuestos`;

  constructor(private http: HttpClient) { }

  findAllByTbTipoImpuestoAndFchInicio(idTipoImpuesto: number, fechaInicio: String){
    return this.http.get<TbImpuesto[]>(`${this.url}/impuesto/${idTipoImpuesto}/${fechaInicio}`);
  }
}
