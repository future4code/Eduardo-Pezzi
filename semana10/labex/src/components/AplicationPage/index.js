import React from 'react';
import { useParams } from 'react-router-dom';

function Aplication(){

    const PathParams = useParams();

    return(
        <>
        {console.log('oi')}
            <p>olá</p>
            <p>id: {PathParams.id}</p>
            {console.log(PathParams)}
        </>

    );
}
export default Aplication;