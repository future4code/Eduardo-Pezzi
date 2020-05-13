import React from 'react';
import './CardFormacaoAcademica.css'

function CardFormacaoAcademica(props) {

    return(

        <div className="bigcard-container">
    
            <h4>{ props.instituicao }</h4>
            <p>{ props.curso }</p>
            
        </div>
    )

}

export default CardFormacaoAcademica;