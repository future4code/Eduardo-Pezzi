import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {

    return (

        <div className="bigcard-container">
            <h4>{ props.mailTitulo }</h4>
            <p>{ props.email }</p>
        </div>

    )
}

export default CardPequeno;