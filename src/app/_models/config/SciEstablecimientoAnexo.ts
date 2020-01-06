import { TbUbicacionGeografica } from './../maestros/TbUbicacionGeografica';
import { SciEmpresa } from './SciEmpresa';

export class SciEstablecimientoAnexo {
    idEstablecimientoAnexo: number;
    sciEmpresa:SciEmpresa;
    codigo: string;
    direccion: string;
    tbUbicacionGeografica: TbUbicacionGeografica;
    estado: boolean;
}