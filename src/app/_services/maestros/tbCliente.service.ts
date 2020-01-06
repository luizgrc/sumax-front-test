import { SearchTbClienteDto } from './../../_models/maestros/dto/SearchTbClienteDto';
import { TbCliente } from './../../_models/maestros/TbCliente';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TbClienteService {

  url: string = `${environment.HOST_MAESTROS}/TbClientes`;

  constructor(private http: HttpClient) { }

  findBySearch(search: SearchTbClienteDto) {
    return this.http.post<TbCliente>(`${this.url}/searchTbCliente`,search);
  }

  findByEstado(estado: boolean){
    return this.http.get<TbCliente[]>(`${this.url}/findAllByEstado/${estado}`);
  }
}
