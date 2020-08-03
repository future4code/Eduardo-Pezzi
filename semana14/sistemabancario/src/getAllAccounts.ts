import moment from 'moment';
import * as fs from 'fs';

moment.locale("pt-br")

const contas: string = fs.readFileSync("./contas.json").toString();
const today: moment.Moment = moment();
const todayformated = today.format("DD/MM/YYYY HH:mm")

console.log('******************************************************************************\n')
console.log('Consulta efetuada em: ', todayformated, '\n')
console.log(contas, '\n');
console.log('******************************************************************************')