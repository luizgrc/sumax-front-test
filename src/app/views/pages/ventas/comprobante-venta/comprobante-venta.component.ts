import { DateUtilService } from './../../../../_services/utils/date-util.service';
import { NumberUtilService } from './../../../../_services/utils/number-util.service';
import { TbClienteService } from './../../../../_services/maestros/tbCliente.service';
import { TbCliente } from './../../../../_models/maestros/TbCliente';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SveEstado } from './../../../../_models/ventas/SveEstado';
import { SveSerieService } from './../../../../_services/ventas/sveSerie.service';
import { SveSerie } from './../../../../_models/ventas/SveSerie';
import { SearchSveVentaDto } from './../../../../_models/ventas/dto/SearchSveVentaDto';
import { SciUsuarioService } from './../../../../_services/config/sciUsuario.service';
import { SciUsuario } from './../../../../_models/config/SciUsuario';
import { SveEstadoService } from './../../../../_services/ventas/sveEstado.service';
import { SveVentaService } from './../../../../_services/ventas/sveVenta.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { SveVenta } from './../../../../_models/ventas/SveVenta';
import moment from 'moment';
import { Observable, Subject, merge } from 'rxjs';
import { NgbTypeahead, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'kt-comprobante-venta',
	templateUrl: './comprobante-venta.component.html',
	styleUrls: ['./comprobante-venta.component.scss']
})

export class ComprobanteVentaComponent implements OnInit {

	//Parametros a cargar
	codigo: string;
	idTipoComprobante: number;
	titulo: string;
	estados: SveEstado[];
	usuarios: SciUsuario[];
	series: SveSerie[];
	searchVenta: SearchSveVentaDto = new SearchSveVentaDto();

	//Datepickers
	@ViewChild('dtInicio', { static: true }) datepickerInicio: NgbDatepicker;
	@ViewChild('dtFinal', { static: true }) datepickerFinal: NgbDatepicker;

	//Autocomplete filtro clientes
	@ViewChild('instance', { static: true }) instance: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();
	clientes: TbCliente[];
	clienteSelected: any;

	//AgGrid
	private gridApi;
	private gridColumnApi;
	private domLayout;
	private defaultColDef;
	private columnDefs;
	private overlayLoadingTemplate;
	private rowSelection;

	constructor(
		private route: ActivatedRoute, private router: Router,
		private sveVentaService: SveVentaService,
		private sveEstadoService: SveEstadoService,
		private sciUsuarioService: SciUsuarioService,
		private sveSerieService: SveSerieService,
		private tbClienteService: TbClienteService,
		private numberUtilService: NumberUtilService,
		private dateUtilService: DateUtilService) {
		this.columnDefs = [
			{
				headerName: 'Nro. Documento', valueGetter: function (params) {
					return params.data.sveSerie.nroSerie + "/" + params.data.nroVenta;
				}, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, resizable: true
			},
			{ headerName: 'Fecha', field: 'fchVenta', valueFormatter: this.dateUtilService.dateFormatter, resizable: true },
			{ headerName: 'Estado', field: 'sveEstado.nombre', resizable: true },
			{ headerName: 'Cod. Cliente', field: 'tbCliente.codigo', resizable: true },
			{ headerName: 'Razón Social', field: 'tbCliente.razonSocial', resizable: true },
			{ headerName: 'Moneda', field: 'tbMoneda.nombre', resizable: true },
			{ headerName: 'Total Afecto', field: 'totalAfecto', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Total Inafecto', field: 'totalInafecto', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Total Exonerado', field: 'totalExonerado', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Total Exportacion', field: 'totalExportacion', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Total Impuesto', field: 'totalImpuesto', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Total Descuento', field: 'totalDescuento', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Total', field: 'totalDocumento', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true }
		];
		this.defaultColDef = { resizable: true };
		this.rowSelection = 'multiple';
		this.overlayLoadingTemplate =
			'<span class="ag-overlay-loading-center">Cargando información</span>';

	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.codigo = params['cod'];
			this.initForm(this.codigo);
		});
	}

	initForm(codigo: string) {
		this.initTipoComprobante(codigo);
		this.initDates();
		this.listarEstados();
		this.listarUsuarios();
		this.listarSeries();
		this.listarClientes();
	}

	initTipoComprobante(codigo: string) {
		switch (codigo) {
			case '01':
				this.titulo = "Listado de Facturas de Venta";
				this.idTipoComprobante = 1;
				break;
			case '03':
				this.titulo = "Listado de Boletas de Venta";
				this.idTipoComprobante = 2;
				break;
			case '07':
				this.titulo = "Listado de Notas de crédito";
				this.idTipoComprobante = 3;
				break;
			case '08':
				this.titulo = "Listado de Notas de débito";
				this.idTipoComprobante = 4;
				break;
			default:
				this.router.navigateByUrl("error/403");
		}
		this.searchVenta.idTipoComprobante = this.idTipoComprobante;
	}

	initDates() {
		this.searchVenta.fchDesde = moment().subtract(100, 'days').toDate();
		this.datepickerInicio.navigateTo({ year: 2019, month: 11, day: 1 });
		this.searchVenta.fchHasta = moment().toDate();
		this.datepickerFinal.navigateTo({ year: 2019, month: 12, day: 26 });
	}

	listarEstados() {
		this.sveEstadoService.listar().subscribe(data => {
			this.estados = data;
		});
	}

	listarUsuarios() {
		this.sciUsuarioService.findAllByEstado(true).subscribe(data => {
			this.usuarios = data;
		});
	}

	listarSeries() {
		this.sveSerieService.findAllByEstadoAndSveTipoComprobante(true, this.idTipoComprobante).subscribe(data => {
			this.series = data;
		});
	}

	listarClientes() {
		this.tbClienteService.findByEstado(true).subscribe(data => {
			this.clientes = data;
		});
	}
	listarComprobantes() {
		this.gridApi.showLoadingOverlay();
		this.sveVentaService.findBySearch(this.searchVenta).subscribe(data => {
			let listVentas: SveVenta[] = [];
			data.forEach(dto => {
				listVentas.push(this.sveVentaService.toVenta(dto));
			});
			this.configGrid(listVentas);
			this.gridApi.hideOverlay();
		});
		this.searchVenta.idEstado = (this.searchVenta.idEstado == null ? 0 : this.searchVenta.idEstado);
		this.searchVenta.idSerie = (this.searchVenta.idSerie == null ? 0 : this.searchVenta.idSerie);
		this.searchVenta.idUsuario = (this.searchVenta.idUsuario == null ? 0 : this.searchVenta.idUsuario);
	}

	configGrid(listVentas: SveVenta[]) {
		this.domLayout = "autoHeight";
		this.gridApi.setRowData(listVentas);
		this.gridApi.setDomLayout("autoHeight");
		this.autoSizeGrid();
		this.gridApi.paginationSetPageSize(10);
	}

	findVentas() {
		if (this.clienteSelected != undefined) {
			if (this.clienteSelected.idCliente != undefined) {
				this.searchVenta.idCliente = this.clienteSelected.idCliente;
			} else {
				this.searchVenta.razonSocialCliente = this.clienteSelected;
			}
		}
		this.listarComprobantes();
	}

	nuevoDocumento() {
		this.router.navigateByUrl('/registrar');
	}

	editarDocumento() {
		let docSelected = this.gridApi.getSelectedNodes();
		if (docSelected.length > 1) {
			console.log(docSelected);
			alert("Debe seleccionar solo 1 documento");
		} else {
			let venta = docSelected[0].data;
			this.router.navigateByUrl(`/editar/${venta.idVenta}`);
		}
	}

	///////////////////////////////////////////
	//Tabla
	onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.listarComprobantes();
	}
	autoSizeGrid() {
		var allColumnIds = [];
		this.gridColumnApi.getAllColumns().forEach(function (column) {
			allColumnIds.push(column.colId);
		});
		this.gridColumnApi.autoSizeColumns(allColumnIds, false);
	}

	onFirstDataRendered(params) {
		params.api.sizeColumnsToFit();
	}

	//Autocomplete
	inputFormatter(value: any) {
		if (value.razonSocial)
			return value.razonSocial
		return value;
	}

	resultFormatter(value: any) {
		return value.razonSocial;
	}

	search = (text$: Observable<string>) => {
		const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
		const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
		const inputFocus$ = this.focus$;

		return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
			map(term => (term === '' ? this.clientes
				: this.clientes.filter(v => v.razonSocial.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
		);
	}

}
