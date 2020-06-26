import React from 'react';

function Aplication( {trips} ){

    const trip_id = trips.id;
    const trip_name = trips.name;
    const trip_description = trips.description;
    const trip_planet = trips.planet;

    return(
        <>
        {console.log(trip_id)}
            <p>olá</p>
        </>

    );
}
export default Aplication;