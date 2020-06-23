import React, { useState } from 'react';
import { Post } from '../utility/conection';
import { FcLike, FcDislike } from 'react-icons/fc';

function Action ( {person, getProfiles },  ){

    const actionId = person.id;
    const likes = [];
    const dislikes = [];
    const [data, setData] = useState([]);

    function sendLike (){

        setData({
            id: person.id,
            choice: true
        })

        Post('/choose-person', data)
        .then(isLike => {
            console.log(isLike)
        })

        likes.push(person.id)
        getProfiles();
    }  

    return(
        <div>
            <FcDislike id={person.id} onClick={sendLike} style={{cursor: 'hand'}}/>
            <FcLike id={person.id} onClick={sendLike} style={{cursor: 'hand'}}/>
            {console.log(actionId)}
        </div>
    );
}
export default Action;