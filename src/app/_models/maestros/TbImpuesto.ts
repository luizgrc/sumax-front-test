import { TbTipoImpuesto } from './TbTipoImpuesto';
export class TbImpuesto {
    idImpuesto: number;
    tbTipoImpuesto: TbTipoImpuesto;
    fchInicio: Date;
    fchFin: Date;
    porcentaje: number;
}