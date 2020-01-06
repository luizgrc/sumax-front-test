import { TbTipoImpuesto } from './../maestros/TbTipoImpuesto';
export class SveTipoAfectacion {
    idTipoAfectacion: number;
    codigo: string;
    nombre: string;
    tipoAfectacion: string;
    modo: string;
    tbTipoImpuesto: TbTipoImpuesto;
    estado: boolean;
}