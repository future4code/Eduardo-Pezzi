import { Employee } from './employees';

export class Seller extends Employee {
    private salesQuantity: number = 0;
    static SELLING_COMMISSION: number = 5;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: number,
        baseSalary: number,
    ){
        super(id, email, name, password, admissionDate, baseSalary);
    }

    public getSalesQuantity(): number {
        return this.salesQuantity
    }

    public setSalesQuantity(quantity: number): void {
        this.salesQuantity = quantity;
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + 400 + this.salesQuantity*Seller.SELLING_COMMISSION;
    }

}