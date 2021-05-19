export interface CreditoInterface {
    nombres:string;
    apellidos: string;
    numeroDeCelular: number;
    correoElectronico: string;
    tipoDeIdentificacion: string;
    numeroDeIdentificacion: number;
    direccionResidencia: string;
    ubicacion: {
        ciudad:string;
        barrio:string
    };
    valorTotalCredito: number;
    numeroCuotas: number;
}