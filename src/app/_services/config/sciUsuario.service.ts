import { SciUsuario } from './../../_models/config/SciUsuario';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SciUsuarioService {

  url: string = `${environment.HOST_CONFIG}/SciUsuarios`;

  constructor(private http: HttpClient) { }

  findAllByEstado(estado: Boolean){    
    return this.http.get<SciUsuario[]>(`${this.url}/findAllByEstado/${estado}`);
  }
}
