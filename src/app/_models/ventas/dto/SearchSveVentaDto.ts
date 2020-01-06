export class SearchSveVentaDto {
    fchDesde: Date;
    fchHasta: Date;
    idOficina: number;
    idUsuario: number;
    idCliente: number;
    razonSocialCliente: string;
    idSerie: number;
    nroVenta: number;
    idEstado: number;
    idTipoComprobante: number;

    constructor(){
        this.idUsuario=0;
        this.idEstado=0;
        this.idSerie=0;
    }
}