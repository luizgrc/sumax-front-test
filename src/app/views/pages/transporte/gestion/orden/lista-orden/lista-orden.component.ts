import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'lista-orden',
	templateUrl: './lista-orden.component.html',
	styleUrls: ['./lista-orden.component.scss']
})
export class ListaOrdenComponent implements OnInit {
	private gridApi;
	private gridColumnApi;
	private domLayout;
	private defaultColDef;
	private loadingCellRendererParams;
	private rowSelection;
	constructor(private router: Router) {
		this.columnDefs;
		this.rowSelection = 'multiple';
	}
	columnDefs = [
		{
			headerName: 'Item', field: 'item', minWidth: 80, maxWidth: 80,
			headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,
			resizable: true
		},
		{ headerName: 'Nro. Orden', field: 'nroOrden', minWidth: 120, maxWidth: 180, resizable: true },
		{ headerName: 'Fch/Hra. Orden', field: 'fchOrden', resizable: true },
		{ headerName: 'Tipo Servicio', field: 'tipoServicio', maxWidth: 180, resizable: true },
		{ headerName: 'Tipo Movimiento', field: 'tipoMovimiento', resizable: true },
		{ headerName: 'Vía Transporte', field: 'viaTransporte', resizable: true },
		{ headerName: 'Tipo Envío', field: 'tipoEnvio', resizable: true },
		{ headerName: 'Peso', field: 'peso', resizable: true },
		{ headerName: 'Bulto', field: 'bulto', resizable: true },
		{ headerName: 'Cantidad Viajes', field: 'cantViaje', resizable: true }
	];
	rowData = [
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 2, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 3, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 4, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 5, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 6, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
		{
			item: 1, nroOrden: 'Nro. Orden', fchOrden: 'Fch/Hra. Orden', tipoServicio: 'Tipo Servicio', tipoMovimiento: 'Tipo Movimiento', viaTransporte: 'Vía Transporte', tipoEnvio: 'Tipo Envío',
			peso: 'Peso', bulto: 'Bulto', cantViaje: 'cantidad de viajes'
		},
	];
	ngOnInit() {
	}
	configGrid() {
		this.domLayout = "autoHeight";
		this.gridApi.setRowData(this.rowData);
		this.gridApi.setDomLayout("autoHeight");
		this.gridApi.sizeColumnsToFit();
		this.gridApi.paginationSetPageSize(10);
		this.loadingCellRendererParams = { loadingMessage: "One moment please..." };
	}
	onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.configGrid();
	}

	onFirstDataRendered(params) {
		params.api.sizeColumnsToFit();
	}

	nuevoDocumento() {
		this.router.navigateByUrl("/nueva-orden");
	}

}
