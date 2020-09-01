export interface FIGHTER {
    name: string,
    life: number,
    defense: number,
    atack: number
}

export function validateCharacter(character: FIGHTER ): boolean {
    if(!character.name || character.life === undefined || 
        character.defense === undefined || character.atack === undefined){
        return false
    } 
        if(character.life < 0 || character.atack < 0 || character.defense < 0 ){
            return false
        }

    return true
}

export function performAttack(attacker: FIGHTER , defender: FIGHTER){

    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error('Invalid Fighters')
    }

    if(attacker.atack > defender.defense){
        defender.life -= attacker.atack - defender.defense
    }
    
}