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
      else  if(character.life < 0 || character.atack < 0 || character.defense < 0 ){
            return false
        } else{
            return true
        }

    
}

export function performAttack(attacker: FIGHTER , defender: FIGHTER){

    if(validateCharacter(attacker) === false || validateCharacter(defender) === false){
        throw new Error('Invalid Fighters')
    }

    if(attacker.atack > defender.defense){
        const atackResult = (defender.life - attacker.atack)
        return atackResult
    }
}

export const performAttack2 = (
    attacker: FIGHTER,
    defender: FIGHTER,
    validator: (input: FIGHTER) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.atack > defender.defense) {
      defender.life -= attacker.atack - defender.defense;
    }
  };
