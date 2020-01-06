import { TbUnidadMedida } from './../maestros/TbUnidadMedida';
import { TbTipoImpuesto } from './../maestros/TbTipoImpuesto';
import { SveTipoAfectacion } from './SveTipoAfectacion';
import { TbConcepto } from './../maestros/TbConcepto';
import { SveVenta } from './SveVenta';
export class SveVentaDetalle {
    idVentaDetalle: number;
    sveVenta: SveVenta;
    item: number;
    tbConcepto: TbConcepto;
    descripcion: string;
    cantidad:number;
    valorUnitario: number;
    valorTotal: number;
    valorReferencial: number;
    valorTotalReferencial: number;
    sveTipoAfectacion: SveTipoAfectacion;
    tbTipoImpuesto: TbTipoImpuesto;
    porcentajeImpuesto: number;
    importeImpuesto: number;
    importeImpuestoGratuito: number;
    porcentajeIsc: number;
    importeIsc: number;
    descuentoItem: number;
    tbUnidadMedida: TbUnidadMedida;
    precioUnitario: number;
    precioTotal: number;
    comentario: string;
}