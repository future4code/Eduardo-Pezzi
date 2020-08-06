import moment from 'moment';
import * as fs from 'fs';

moment.locale("pt-br")

const contas: string = fs.readFileSync("./contas.json").toString();

class Transaction {
    constructor(
        private value: number,
        private description: string,
        private date: string = moment().format('DD/MM/YYYY')
    ) {
    }

    getValue = () => this.value
    getDescription = () => this.description
    getDate = () => this.date
}

class Conta {
    constructor(
        private nome: string,
        private cpf: number,
        private nascimento: string,
        private saldo: number = 0,
        private transaction: Transaction[] = []
    ) {
    }

    getName = () => this.nome
    getCpf = () => this.cpf
    getNascimento = () => this.nascimento
    getSaldo = () => this.saldo
    getTransaction = () => this.transaction
}

class Bank {
    constructor(
        private contas: Conta[] = []
    ) {
        
    }

    getContas = () => this.contas
}

let todasContas: Conta[] = [];

let novacontaNome: string = process.argv[2];
let novacontaCPF: number = Number(process.argv[3]);
let novacontaNascimento: string = process.argv[4];

const today: number = moment.now();
const checkdifference: number = (today - Number(novacontaNascimento));

function criarconta(
    novacontaNome: string, novacontaCPF: number, novacontaNascimento: string
    )
    {
        try {
        todasContas.push({
            nome: novacontaNome,
            cpf: novacontaCPF,
            nascimento: novacontaNascimento
        });
        const criaNovaLista = JSON.stringify(todasContas);
        fs.appendFileSync('./contas.json', criaNovaLista);
        console.log('Conta criada com sucesso!');
    } catch (error) {
        console.log(error.message)
    }
}

criarconta(novacontaNome, novacontaCPF, novacontaNascimento)