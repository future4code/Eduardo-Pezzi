import { User, performPurchase } from "../exercicio1e2";
import { CasinoUser } from '../exercicio3';
import {verifyAge, NACIONALITY, Casino, LOCATION} from '../exercicio3';
import { TestScheduler } from "jest";


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


//c)

test("Testing 2 American and 2 Brazilian notAllowed", ()=> {
    const casinoPlayerBR1: CasinoUser = {
        name: 'Eduardo',
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    };

    const casinoPlayerBR2: CasinoUser = {
        name: 'Mônica',
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const casinoPlayerUS1: CasinoUser = {
        name: 'Edward',
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }

    
    const casinoPlayerUS2: CasinoUser = {
        name: 'Sara',
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }

    const casinoUS: Casino = {
        name: "manhattan Casino",
        location: LOCATION.EUA
    } 
    const testResult1BR = verifyAge(casinoUS , [casinoPlayerBR1])
    const testResult2BR = verifyAge(casinoUS , [casinoPlayerBR2])
    const testResult3US = verifyAge(casinoUS , [casinoPlayerUS1])
    const testResult4US = verifyAge(casinoUS , [casinoPlayerUS2])

    expect(testResult1BR.brazilians.unallowed).toEqual(["Eduardo"]);
    expect(testResult2BR.brazilians.unallowed).toEqual(["Mônica"]);
    expect(testResult3US.americans.unallowed).toEqual(["Edward"]);
    expect(testResult4US.americans.unallowed).toEqual(["Sara"]);
});

// d)

test("Allowing two americans and blocking 2 brazilians", () => {
    const blockedBR: CasinoUser = {
        name: "Eduardo",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const allowedUS: CasinoUser = {
        name: "Edward",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }

    const casinoUS: Casino = {
        name: "Miami Royal Casino",
        location: LOCATION.EUA
    }

    const testResult = verifyAge(casinoUS, [blockedBR, blockedBR, allowedUS, allowedUS])

    expect(testResult.brazilians.unallowed).toEqual(["Eduardo", "Eduardo"]);
    expect(testResult.americans.allowed).toEqual(["Edward", "Edward"]);
})

// 5 -

// a)

test("a Brazilian going into a BR casino", () => {
    const brazilianPlayer: CasinoUser = {
        name: "Eduardo",
        age: 20,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const casinoBR: Casino = {
        name: "Sugar Loaf Casino",
        location: LOCATION.BRAZIL
    }

    const testResult = verifyAge(casinoBR, [brazilianPlayer])

    expect(testResult.brazilians.allowed.length).toBeGreaterThan(0);
    expect(testResult.brazilians.allowed.length).toBeLessThan(2);
})

// b)

test('Let the foreigner play', () => {
    const foreignerUS: CasinoUser = {
        name: 'Walter White',
        age: 55,
        nacionality: NACIONALITY.AMERICAN
    }

    const casinoBR: Casino = {
        name: "Leblon Beach Casino",
        location: LOCATION.BRAZIL
    }

    const testResult = verifyAge(casinoBR, [foreignerUS])

    expect(testResult.americans.unallowed.length).toBe(0);
})

// c)

test('two brazialians and two americans would like to play', () => {
    const brazilian: CasinoUser = {
        name: "Eduardo",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const american: CasinoUser = {
        name: "Edward",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }

    const casinoUS: Casino = {
        name: "Boston Casino",
        location: LOCATION.EUA
    }

    const testResult = verifyAge(casinoUS, [brazilian, american])

    expect(testResult.brazilians.unallowed).toContain("Eduardo");
    expect(testResult.americans.unallowed).toContain("Edward");
});

test('two brazialians and two americans would like to play', () => {
    const brazilian: CasinoUser = {
        name: "Eduardo",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const american: CasinoUser = {
        name: "Edward",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }

    const casinoUS: Casino = {
        name: "Boston Casino",
        location: LOCATION.EUA
    }

    const testResult = verifyAge(casinoUS, [brazilian, american])

    expect(testResult.brazilians.unallowed).toContain("Eduardo");
    expect(testResult.americans.unallowed).toContain("Edward");
});

test('two brazialians and two americans, checking array lenght', () => {
    const brazilian1: CasinoUser = {
        name: "Eduardo",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const american1: CasinoUser = {
        name: "Edward",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }

    const casinoUS: Casino = {
        name: "Boston Casino",
        location: LOCATION.EUA
    }

    const testResult = verifyAge(casinoUS, [brazilian1, brazilian1, american1, american1])

    expect(testResult.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(testResult.americans.unallowed.length).toBeLessThan(1);
    expect(testResult.americans.allowed.length).toBe(2);
});