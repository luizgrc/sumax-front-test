import { SveVentaRelacionada } from './../../../../../_models/ventas/SveVentaRelacionada';
import { SveDocumentoRelacionado } from './../../../../../_models/ventas/SveDocumentoRelacionado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-dcto-relacionado',
  templateUrl: './dcto-relacionado.component.html',
  styleUrls: ['./dcto-relacionado.component.scss']
})
export class DctoRelacionadoComponent implements OnInit {

  //AgGrid
	private gridApi;
	private gridColumnApi;
	private domLayout;
	private defaultColDef;
	private columnDefs;
	private loadingCellRendererParams;
	//Data Grid
  docRelacionados: SveVentaRelacionada[] = [];
  
  constructor() { 
    this.columnDefs = [
			{
				headerName: 'Tipo de relación', field: 'sveTipoRelacion.nombre', minWidth: 200, maxWidth: 250,
				headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, 
				resizable: true
			},
			{ headerName: 'Tipo de Documento Relacionado', field: 'sveDocumentoRelacionado.nombre', minWidth: 200, maxWidth: 250, resizable: true },
			{ headerName: 'Número de Documento', field: 'numDocumento', resizable: true }
		];
  }

  ngOnInit() {
  }

  //Tabla
	configGrid() {
		this.domLayout = "autoHeight";
		this.gridApi.setRowData(this.docRelacionados);
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
