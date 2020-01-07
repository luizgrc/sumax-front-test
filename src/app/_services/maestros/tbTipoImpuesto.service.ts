import { TbTipoImpuesto } from './../../_models/maestros/TbTipoImpuesto';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TbTipoImpuestoService {

	url: string = `${environment.HOST_MAESTROS}/TbTipoImpuestos`;

	constructor(private http: HttpClient) { }

	getDefaulTipoImpuesto() {
		return this.http.get<TbTipoImpuesto>(`${this.url}/`);
	}
}
