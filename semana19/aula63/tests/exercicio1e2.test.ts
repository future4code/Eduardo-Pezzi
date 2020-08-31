import { User, performPurchase } from "../exercicio1e2";
import { CasinoUser } from '../exercicio3';
import {verifyAge, NACIONALITY, Casino, LOCATION} from '../exercicio3';


// a)
test("Checking possibility to buy 1" , ()=> {
    const buyer : User = {
        name: "Eduardo",
        balance: 10
    }

    const testResult = performPurchase(buyer, 5);

    expect(testResult).toEqual({
        ...buyer,
        balance: 5
    })
})

//b)
test("Checking possibility to buy 2" , ()=> {
    const buyer : User = {
        name: "Eduardo",
        balance: 10
    }

    const testResult = performPurchase(buyer, 10);

    expect(testResult).toEqual({
        ...buyer,
        balance: 0
    })
})

//c)
test("Checking possibility to buy 3" , ()=> {
    const buyer : User = {
        name: "Eduardo",
        balance: 10
    }

    const testResult = performPurchase(buyer, 15);

    expect(testResult).toEqual(undefined)
})

test("Testing Brazilian Allowed", ()=> {
    const casinoPlayer: CasinoUser = {
        name: 'Eduardo',
        age: 20,
        nacionality: NACIONALITY.BRAZILIAN
    };
    const casinoBR: Casino = {
        name: "Casino Rio",
        location: LOCATION.BRAZIL
    } 
    const testResult = verifyAge(casinoBR , [casinoPlayer])

    expect(testResult.brazilians.allowed).toEqual(["Eduardo"]);
});

test("Testing American Allowed", ()=> {
    const casinoPlayer: CasinoUser = {
        name: 'Edward',
        age: 18,
        nacionality: NACIONALITY.AMERICAN
    };
    const casinoBR: Casino = {
        name: "Casino Rio",
        location: LOCATION.BRAZIL
    } 
    const testResult = verifyAge(casinoBR , [casinoPlayer])

    expect(testResult.americans.allowed).toEqual(["Edward"]);
});