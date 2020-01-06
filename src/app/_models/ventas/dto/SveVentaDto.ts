import { SveDocumentoRelacionado } from './../SveDocumentoRelacionado';
import { SveVentaDetalle } from './../SveVentaDetalle';
import { SveVenta } from '../SveVenta';
import { SveVentaDescuentoCargo } from '../SveVentaDescuentoCargo';

export class SveVentaDto {
    sveVenta: SveVenta;
    listSveVentaDetalles: SveVentaDetalle[];
    listSveDescuentoCargos: SveVentaDescuentoCargo[];
    listSveVentaRelacionadas: SveDocumentoRelacionado[];
}