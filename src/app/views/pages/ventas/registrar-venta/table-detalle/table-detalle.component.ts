import { NumberUtilService } from './../../../../../_services/utils/number-util.service';
import { SveVentaDetalle } from './../../../../../_models/ventas/SveVentaDetalle';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'kt-table-detalle',
	templateUrl: './table-detalle.component.html',
	styleUrls: ['./table-detalle.component.scss']
})
export class TableDetalleComponent implements OnInit {

	//AgGrid
	private gridApi;
	private gridColumnApi;
	private domLayout;
	private defaultColDef;
	private columnDefs;
	private loadingCellRendererParams;
	//Data Grid
	detalles: SveVentaDetalle[] = [];

	constructor(private numberUtilService: NumberUtilService) {
		this.columnDefs = [
			{
				headerName: 'Item', field: 'item', minWidth: 80, maxWidth: 80,
				headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, 
				resizable: true
			},
			{ headerName: 'Código Concepto', field: 'tbConcepto.codigo', minWidth: 120, maxWidth: 180, resizable: true },
			{ headerName: 'Descripción', field: 'tbConcepto.nombre', resizable: true },
			{ headerName: 'Afectación', field: 'sveTipoAfectacion.nombre', resizable: true },
			{ headerName: 'Unidad de medida', field: 'tbUnidadMedida.nombre', maxWidth: 180, resizable: true },
			{ headerName: 'Cantidad', field: 'cantidad', resizable: true },
			{ headerName: 'Valor Unitario', field: 'valorUnitario', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Valor Total', field: 'valorTotal', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Impuesto IGV', field: 'importeImpuesto', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Descuento', field: 'descuentoItem', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true },
			{ headerName: 'Precio Total', field: 'precioTotal', valueFormatter: this.numberUtilService.decimalFormatter, resizable: true}
		];
	}

	ngOnInit() {
	}
	//Tabla
	configGrid() {
		this.domLayout = "autoHeight";
		this.gridApi.setRowData(this.detalles);
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
}
