import { SciOficina } from './../../_models/config/SciOficina';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SciOficinaService {

  url: string = `${environment.HOST_CONFIG}/SciOficinas`;

  constructor(private http: HttpClient) { }

  findAllByEstado(estado: Boolean){    
    return this.http.get<SciOficina[]>(`${this.url}/findAllByEstado/${estado}`);
  }
}
