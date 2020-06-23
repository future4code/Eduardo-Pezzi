import React, { useState } from 'react';
import { Get } from '../utility/conection';

function Matches (){

    const [matches, setMatches] = useState([])

    Get('/matches').then(response =>{
        setMatches(response.data.matches)
    })

    return(
        <>
        {(matches !== "" ? <MatchesContainer>
            matches.map(match => {
                return(
                    <img src={matches.photo} alt={matches.name} />
                    <p>{matches.name}</p>
                )
            })
        </MatchesContainer> : <MatchesContainer><p>Você não tem matches</p></MatchesContainer> )}
            
        </>

    );
}
export default Matches;