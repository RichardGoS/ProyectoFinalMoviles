export class Pedido {
    constructor(public cc: number,
        public id_producto: number,
        public cantidad: number,
        public observacion: string ) {
    }
}