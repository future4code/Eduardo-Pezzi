export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface CasinoUser {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

// ----

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export function verifyAge(casino: Casino, users: CasinoUser[]): Result {
    const allowed: CasinoUser[] = [];
    const unallowed: CasinoUser[] = [];

    for(const user of users){
        if(casino.location === LOCATION.EUA){
            if(user.age >= 21){
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
        } else if(casino.location === LOCATION.BRAZIL){
            if(user.age >= 18){
                allowed.push(user)
            } else {
                unallowed.push(user);
            }
            break
        }
    }

    return {
        brazilians: {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name),

            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name),
        },
        americans: {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name),

            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name)
        }
    }
}

// c) Pensar na solução do problema, e ter a ideia de que não foi nada parecida com a dica mostrada.