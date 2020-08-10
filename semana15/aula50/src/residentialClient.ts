import { Residence } from './residence';
import { Client } from './client';

export class ResidentialClients extends Residence implements Client {
    constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
    )
    {
        super(residentsQuantity, cep)
    }

    public getCPF(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}