import { SveTipoRelacion } from './SveTipoRelacion';
import { SveTipoComprobante } from './SveTipoComprobante';
export class SveDocumentoRelacionado {
    idDocumentoRelacionado: number;
    sveTipoComprobante: SveTipoComprobante;
    codigo: string;
    nombre: string;
    estado: number;
    sveTipoRelacion: SveTipoRelacion;
    ventaExistente: number;
}