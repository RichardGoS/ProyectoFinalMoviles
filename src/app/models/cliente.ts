export class Cliente {
    constructor(
    	public cc: number,
        public nombre: string,
        public departamento: string,
        public municipio: string,
        public direccion: string,
        public correo: string,
        public tipo_cliente: string ) {
    }
}