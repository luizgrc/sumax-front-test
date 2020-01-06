import { SveDocumentoRelacionado } from './SveDocumentoRelacionado';
import { SveVentaDetalle } from './SveVentaDetalle';
import { SveVentaDescuentoCargo } from './SveVentaDescuentoCargo';
import { SveEstado } from './SveEstado';
import { SciUsuario } from './../config/SciUsuario';
import { TbTipoPago } from './../maestros/TbTipoPago';
import { TbCliente } from './../maestros/TbCliente';
import { TbMoneda } from './../maestros/TbMoneda';
import { SciEstablecimientoAnexo } from './../config/SciEstablecimientoAnexo';
import { SciOficina } from './../config/SciOficina';
import { TbUbicacionGeografica } from './../maestros/TbUbicacionGeografica';
import { SveMotivo } from './SveMotivo';
import { SveSerie } from './SveSerie';
import { SveTipoComprobante } from './SveTipoComprobante';
import { SveTipoVenta } from './SveTipoVenta';

export class SveVenta {
    idVenta: number;
    sciOficina: SciOficina;
    sciEstablecimientoAnexo: SciEstablecimientoAnexo;
    sveTipoComprobante: SveTipoComprobante;
    sveSerie: SveSerie;
    nroVenta: number;
    fchVenta: string;
    sveTipoVenta: SveTipoVenta;
    sveMotivo: SveMotivo;
    tbMoneda: TbMoneda;
    impuesto: number;
    tipoCambio: number;
    tbCliente: TbCliente;
    razonSocial: string;
    direccion: string;
    tbUbicacionGeografica: TbUbicacionGeografica;
    sveEstado: SveEstado;
    tbTipoPago: TbTipoPago;
    plazo: number;
    porcentajePercepcion: number; 
    fchVencimiento: string;

    totalAfecto: number;
    totalInafecto: number;
    totalExonerado: number;
    totalExportacion: number;
    totalGratuito: number;
    totalOtrosCargos: number;
    totalIsc: number;
    totalImpuesto: number;
    totalImpuestoGratuito: number;
    totalValorVenta: number;
    totalPrecioVenta: number;
    totalPercepcion: number;
    totalRedondeo: number;
    totalDocumento: number;
    totalDescuento: number;
    
    referencia: string;
    observacion: string;
    sveVentaOrigen: SveVenta;
    fchCopiado: string;
    sciUsuario: SciUsuario;
    estado: number;

    sveVentaDescuentoCargo: SveVentaDescuentoCargo;
    sveVentaDetalles: SveVentaDetalle[];
    sveVentaRelacionadas: SveDocumentoRelacionado[];

}