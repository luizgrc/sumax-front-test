import { TbActividadEconomica } from './../maestros/TbActividadEconomica';
import { TbUbicacionGeografica } from './../maestros/TbUbicacionGeografica';
import { TbTipoDocumento } from './../maestros/TbTipoDocumento';
import { SciGrupoEmpresarial } from './SciGrupoEmpresarial';

export class SciEmpresa {
    idEmpresa: number;
    sciGrupoEmpresarial: SciGrupoEmpresarial;
    codigo: string;
    tbTipoDocumento: TbTipoDocumento;
    nroDocumento: string;
    tbUbicacionGeografica: TbUbicacionGeografica;
    razonSocial: string;
    nombreComercial: string;
    alias: string;
    domicilioFiscal: string;
    tbActividadEconomica: TbActividadEconomica;
    telefono: string;
    paginaWeb: string;
    estado: string;
}