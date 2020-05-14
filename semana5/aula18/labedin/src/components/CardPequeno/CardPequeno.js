import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {

    return (

        <div className="cardPequeno">
            <h4> { props.tituloendereco } </h4>
            <p>{ props.endereco }</p>
            <p>{ props.email }</p>
        </div>

    )
}

export default CardPequeno;