import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-preview-transporte',
  templateUrl: './preview-transporte.component.html',
  styleUrls: ['./preview-transporte.component.scss']
})
export class PreviewTransporteComponent implements OnInit {


  constructor() {
  }
  columnDefs = [
    { headerName: 'Item' }, { headerName: 'Estado viaje' }, { headerName: 'Punto de Partida' }, { headerName: 'Punto de llegada' },
    { headerName: 'Información de la carga' }, { headerName: 'Mercadería' }, { headerName: 'Zona' }, { headerName: 'Tipo mercadrería' },
    { headerName: 'Fch/Hra entrga/carguío' }, { headerName: 'Transportista' }, { headerName: 'Nro. contenedor' }, { headerName: 'Cantidad contenedor' },
    { headerName: 'Tipo contenedor' }
  ];
  rowData = [
    {
      item: 1, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      item: 2, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      item: 3, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      item: 4, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      item: 5, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },
    {
      item: 6, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 7, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 8, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 9, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 10, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 11, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 12, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 13, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    },

    {
      item: 14, estadoViaje: 'Estado viaje', puntoPartida: 'Punto de Partida', puntoLlegada: 'Punto de llegada', infoCarga: 'Información de la carga', mercaderia: 'Mercaderia', zona: 'Zona',
      tipoMercadria: 'Tipo mercadrería', fchCarguio: 'Fch/Hra entrga/carguío', transportista: 'Transportista', contenedor: 'Nro. contenedor', cantContenedor: 'Cantidad contenedor', tipoContenedor: 'Tipo contenedor'
    }
  ];



  ngOnInit() {
    console.log(this.rowData[0]);
  }

}
