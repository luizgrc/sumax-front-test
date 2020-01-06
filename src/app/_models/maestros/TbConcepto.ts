import { TbTipoConcepto } from './TbTipoConcepto';
import { SveTipoAfectacion } from './../ventas/SveTipoAfectacion';
import { TbUnidadMedida } from './TbUnidadMedida';
export class TbConcepto {
    idConcepto:number;
    codigo:string;
    nombre:string;
    tbUnidadMedida:TbUnidadMedida;
    sveTipoAfectacion:SveTipoAfectacion;
    tbTipoConcepto:TbTipoConcepto;
    estado: boolean;
}