import React, { useState, useEffect } from 'react';

function CardPerson ( {person} ){

    const personName = person.name;
    const personPhoto = person.photo;
    const personId = person.id;

    return(
        <div>
            <img src={personPhoto} alt={personName} />
            <p>{personName}</p>
        </div>
    );
}
export default CardPerson;