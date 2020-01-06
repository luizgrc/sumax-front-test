import { Component, OnInit } from '@angular/core';
import { SveVentaDetalle } from '../../../../../_models/ventas/SveVentaDetalle';
import { NumberUtilService } from '../../../../../_services/utils/number-util.service';

@Component({
  selector: 'kt-detalle-transporte',
  templateUrl: './detalle-transporte.component.html',
  styleUrls: ['./detalle-transporte.component.scss']
})
export class DetalleTransporteComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private domLayout;
  private defaultColDef;
  private loadingCellRendererParams;
  //Data Grid
  detalles: SveVentaDetalle[] = [];

  constructor(private numberUtilService: NumberUtilService) {
    
  }
  columnDefs = [
      {
        headerName: 'Item', field: 'item', minWidth: 80, maxWidth: 80,
        headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,
        resizable: true
      },
      { headerName: 'Estado viaje', field: 'estadoViaje', minWidth: 120, maxWidth: 180, resizable: true },
      { headerName: 'Punto de Partida', field: 'puntoPartida', resizable: true },
      { headerName: 'Punto de llegada', field: 'puntoLlegada', maxWidth: 180, resizable: true },
      { headerName: 'Información de la carga', field: 'infoCarga', resizable: true },
      { headerName: 'Mercadería', field: 'mercaderia', resizable: true },
      { headerName: 'Zona', field: 'zona', resizable: true },
      { headerName: 'Tipo mercadería', field: 'tipoMercaderia', resizable: true },
      { headerName: 'Fch/Hra entrega/carguío', field: 'fchCarguio', resizable: true },
      { headerName: 'Transportista', field: 'transportista', resizable: true },
      { headerName: 'Nro. contenedor', field: 'contenedor', resizable: true },
      { headerName: 'Cantidad contenedor', field: 'cantContenedor', resizable: true },
      { headerName: 'Tipo contenedor', field: 'tipoContenedor', resizable: true },
    ];
  rowData = [
    {
      estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercaderia: 'Tipo mercadería', fchCarguio: 'Fch/Hra entrega/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercaderia: 'Tipo mercadería', fchCarguio: 'Fch/Hra entrega/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercaderia: 'Tipo mercadería', fchCarguio: 'Fch/Hra entrega/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercaderia: 'Tipo mercadería', fchCarguio: 'Fch/Hra entrega/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercaderia: 'Tipo mercadería', fchCarguio: 'Fch/Hra entrega/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercaderia: 'Tipo mercadería', fchCarguio: 'Fch/Hra entrega/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
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

}
