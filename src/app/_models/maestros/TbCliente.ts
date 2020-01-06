import { TbTipoPago } from './TbTipoPago';
import { TbUbicacionGeografica } from './TbUbicacionGeografica';
import { TbTipoDocumento } from './TbTipoDocumento';
export class TbCliente {
    idCliente: number;
    codigo: string;
    tbTipoDocumento: TbTipoDocumento;
    nroDocumento: string;
    razonSocial: string;
    direccion: string;
    tbUbicacionGeografica: TbUbicacionGeografica;
    tbTipoPago: TbTipoPago;
    plazoDias: number;
    estado: boolean;
    idBitacora: number;
}