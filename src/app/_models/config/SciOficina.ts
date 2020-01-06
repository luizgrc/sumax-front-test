import { SciEstablecimientoAnexo } from './SciEstablecimientoAnexo';
import { TbUbicacionGeografica } from './../maestros/TbUbicacionGeografica';
import { SciEmpresa } from './SciEmpresa';

export class SciOficina {
    idOficina: number;
    sciEmpresa: SciEmpresa;
    codigo: string;
    nombre: string;
    direccion: string;
    tbUbicacionGeografica:TbUbicacionGeografica;
    ctrlOficinaPrincipal: number;
    sciEstablecimientoAnexo: SciEstablecimientoAnexo;
    estado: number;
}