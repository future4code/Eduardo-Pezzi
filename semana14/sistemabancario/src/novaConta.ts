import moment from 'moment';
import * as fs from 'fs';

moment.locale("pt-br")

const contas: string = fs.readFileSync("./contas.json").toString();

let todasContas: conta[] = [];

let novacontaNome: string = process.argv[2];
let novacontaCPF: number = Number(process.argv[3]);
let novacontaNascimento: string = process.argv[4];

const today: number = moment.now();
const checkdifference: number = (today - Number(novacontaNascimento));

type conta = {
    nome: string,
    cpf: number,
    nascimento: string,
}

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