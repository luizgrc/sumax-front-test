import { TbPais } from './TbPais';

export class TbUbicacionGeografica {
    idUbicacionGeografica: number;
    codigo: string;
    nombre: string;
    nivel: number;
    tbUbigeoPadre: TbUbicacionGeografica;
    tbPais: TbPais;    
    estado: Boolean;
}