import { Observable } from 'rxjs';
import { SearchSveVentaDto } from './../../_models/ventas/dto/SearchSveVentaDto';
import { SveVentaDto } from './../../_models/ventas/dto/SveVentaDto';
import { SveVenta } from './../../_models/ventas/SveVenta';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SveVentaService {

  url: string = `${environment.HOST_VENTAS}/SveVentas`;

  constructor(private http: HttpClient) { }

  findBySearch(search: SearchSveVentaDto) {    
		search.idEstado = (search.idEstado == 0 ? null : search.idEstado);
		search.idSerie = (search.idSerie == 0 ? null : search.idSerie);
		search.idUsuario = (search.idUsuario == 0 ? null : search.idUsuario);
		console.log(search);
    return this.http.post<SveVentaDto[]>(`${this.url}/searchSveVenta`,search);
  }

  findById(id: number) {
    return this.http.get<SveVentaDto>(`${this.url}/${id}`);
  }

  public toVenta(dto: SveVentaDto){
    let venta: SveVenta = new SveVenta();
    venta = dto.sveVenta;
    venta.sveVentaDetalles = dto.listSveVentaDetalles;
    venta.sveVentaRelacionadas = dto.listSveVentaRelacionadas;
    venta.sveVentaDescuentoCargo = dto.listSveDescuentoCargos;
    return venta;
}
}
