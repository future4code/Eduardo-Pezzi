import {validateCharacter, FIGHTER, performAttack, performAttack2} from '../src/exercicio1';

describe("Testes exercícios Aula64 --->", ()=> {

    // a)
    test("Testing fighter with empty name must return false", ()=>{
        
        const fighter: FIGHTER = {
            name: "",
            life: 100,
            defense: 120,
            atack: 90
        }

        const testResult = validateCharacter(fighter);

        expect(testResult).toBe(false);
    })

    // b)
    test("Testing a fighter with empty life", ()=>{
        const fighter: FIGHTER = {
            name: "Destroyer",
            life: 0,
            defense: 80,
            atack: 110
        }

        const testResult = validateCharacter(fighter);

        expect(testResult).toBe(true);
    })

    // c)
    test("Testing a fighter with empty atack", ()=>{
        const fighter: FIGHTER = {
            name: "Destroyer",
            life: 100,
            defense: 80,
            atack: 0
        }

        const testResult = validateCharacter(fighter);

        expect(testResult).toBe(true);
    })

    // d)
    test("Testing a fighter with empty defense", ()=>{
        const fighter: FIGHTER = {
            name: "Destroyer",
            life: 100,
            defense: 0,
            atack: 1000
        }

        const testResult = validateCharacter(fighter);

        expect(testResult).toBe(true);
    })

    // e)
    test("Testing a fighter with negative life", ()=>{
        const fighter: FIGHTER = {
            name: "Destroyer",
            life: -100,
            defense: 80,
            atack: 90
        }

        const testResult = validateCharacter(fighter);

        expect(testResult).toBe(false);
    })

    // f)
    test("Testing a fighter with life, defense or atack as zero ", ()=>{
        const fighter: FIGHTER = {
            name: "Destroyer",
            life: -100,
            defense: 80,
            atack: 0
        }

        const testResult = validateCharacter(fighter);

        expect(testResult).toBe(false);
    })

    // g)
    test("Testing a fighter with a regular profile", ()=>{
        const fighter: FIGHTER = {
            name: "Storm",
            life: 100,
            defense: 80,
            atack: 90
        }

        const testResult = validateCharacter(fighter);

        expect(testResult).toBe(true);
    })

    // 3

    // a) ***
    test('Testing performing atack', ()=>{
        const atacker: FIGHTER = {
            name: "Furious",
            life: 100,
            defense: 80,
            atack: 100
        }

        const defender: FIGHTER = {
            name: "Wanted",
            life: 100,
            defense: 110,
            atack: 85
        }

        const testResult = performAttack(atacker, defender)

        expect(testResult).toBe(undefined);
    });

    // b
    test('Testing performing atack2', ()=>{
        const atacker: FIGHTER = {
            name: "Furious",
            life: 100,
            defense: 80,
            atack: 100
        }

        const defender: FIGHTER = {
            name: "Wanted",
            life: 100,
            defense: 110,
            atack: 85
        }

        const testResult = performAttack2(atacker, defender)

        expect(testResult).toBe(undefined);
    })

    function validateMock(input: any): performAttack2
})