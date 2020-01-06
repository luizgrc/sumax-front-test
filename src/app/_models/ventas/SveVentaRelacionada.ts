import { SveDocumentoRelacionado } from './SveDocumentoRelacionado';
import { SveTipoComprobante } from './SveTipoComprobante';
import { SveTipoRelacion } from './SveTipoRelacion';
import { SveVenta } from './SveVenta';

export class SveVentaRelacionada {
    idVentaRelacionada: number;
    sveVenta: SveVenta;
    sveTipoRelacion: SveTipoRelacion;
    sveDocumentoRelacionado: SveDocumentoRelacionado;
    sveTipoComprobante: SveTipoComprobante;
    sveVentaAdjunta: SveVenta;
    numDocumento: string;
}