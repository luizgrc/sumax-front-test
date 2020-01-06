import { SciOficina } from './../../../../../_models/config/SciOficina';
import { TbImpuesto } from './../../../../../_models/maestros/TbImpuesto';
import { TbImpuestoService } from './../../../../../_services/maestros/tbImpuesto.service';
import { TbTipoImpuestoService } from './../../../../../_services/maestros/tbTipoImpuesto.service';
import { TbTipoImpuesto } from './../../../../../_models/maestros/TbTipoImpuesto';
import { TbMoneda } from './../../../../../_models/maestros/TbMoneda';
import { TbMonedaService } from './../../../../../_services/maestros/tbMoneda.service';
import { SveTipoVenta } from './../../../../../_models/ventas/SveTipoVenta';
import { SveTipoVentaService } from './../../../../../_services/ventas/sveTipoVenta.service';
import { SciOficinaService } from './../../../../../_services/config/sciOficina.service';
import { SciEstablecimientoAnexo } from './../../../../../_models/config/SciEstablecimientoAnexo';
import { SciEstablecimientoAnexoService } from './../../../../../_services/config/sciEstablecimientoAnexo.service';
import { SveSerieService } from './../../../../../_services/ventas/sveSerie.service';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SveSerie } from './../../../../../_models/ventas/SveSerie';
import { Subject, Observable, merge } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';

@Component({
	selector: 'kt-datos-generales',
	templateUrl: './datos-generales.component.html',
	styleUrls: ['./datos-generales.component.scss']
})
export class DatosGeneralesComponent implements OnInit {

	//Autocomplete filtro clientes
	@ViewChild('instance', { static: true }) instance: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();

	idTipoComprobante: number;
	oficinas: SciOficina[];
	series: SveSerie[];
	tiposVenta: SveTipoVenta[];
	monedas: TbMoneda[];
	impuesto: number;
	serieSelected: any;

	constructor(private sveSerieService: SveSerieService,
		private sciOficinaService: SciOficinaService,
		private sveTipoVentaService : SveTipoVentaService,
		private tbMonedaService : TbMonedaService,
		private tbTipoImpuestoService : TbTipoImpuestoService,
		private tbImpuestoService : TbImpuestoService) { 
			this.idTipoComprobante = 1;
			this.buscarImpuestoDefault();
		}

	ngOnInit() {
		this.listarLocalesAnexos();
		this.listarSeriesByTipoComprobante();
		this.listarTipoVentas();
		this.listarMonedas();
	}

	listarLocalesAnexos() {
		this.sciOficinaService.findAllByEstado(true).subscribe(data => {
			this.oficinas = data;
		});
	}

	listarSeriesByTipoComprobante() {
		this.sveSerieService.findAllByEstadoAndSveTipoComprobante(true, this.idTipoComprobante).subscribe(data => {
			this.series = data;
		});
	}

	listarTipoVentas(){
		this.sveTipoVentaService.findAllByEstado(true).subscribe(data => {
			this.tiposVenta = data;
		});
	}

	listarMonedas(){
		this.tbMonedaService.findAllByEstado(true).subscribe(data => {
			this.monedas = data;
		});
	}

	buscarImpuestoDefault(){
		this.tbTipoImpuestoService.getDefaulTipoImpuesto().subscribe(data => {
			var fecha = moment().format("YYYY-MM-DD");
			this.tbImpuestoService.findAllByTbTipoImpuestoAndFchInicio(data.idTipoImpuesto, fecha).subscribe(data2 => {
				this.impuesto = data2[0].porcentaje / 100;
			});
		});
	}


	//Autocomplete
	inputFormatter(value: any) {
		if (value.nroSerie)
			return value.nroSerie
		return value;
	}

	resultFormatter(value: any) {
		return value.nroSerie;
	}

	search = (text$: Observable<string>) => {
		const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
		const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
		const inputFocus$ = this.focus$;

		return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
			map(term => (term === '' ? this.series
				: this.series.filter(v => v.nroSerie.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
		);
	}

}
