import { TbMoneda } from './../../_models/maestros/TbMoneda';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TbMonedaService {

  url: string = `${environment.HOST_MAESTROS}/TbMonedas`;

  constructor(private http: HttpClient) { }

  findAllByEstado(estado: boolean){
    return this.http.get<TbMoneda[]>(`${this.url}/findAllByEstado/${estado}`);
  }
}
