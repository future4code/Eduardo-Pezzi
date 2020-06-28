import React, { useEffect, useState } from 'react';
import { Get } from '../../Utility/Conection';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {
    ViagensPageContainer,
    LeftBar,
    RightBar
} from './styles';

import 'antd/dist/antd.css';

import {  
    Card,
    Avatar,
} 
from 'antd';

import {  
    ShoppingCartOutlined  
} 
from '@ant-design/icons'

const { Meta } = Card;


function Viagens (){

    
    const history = useHistory()
    const [trips, setTrips] = useState([]);
    //const [tripid, setTripId] = useState([]);
    
    

    useEffect(() =>{

        Get('/trips',)
        .then(response =>{
            setTrips(response.data.trips)
        })
    }, [])
    
    /*const aplication = () => {
        
        history.push(`/aplication/${tripid}`)
    }*/
    

    return(
        <ViagensPageContainer>
            <LeftBar />
            {trips.map(trip => {
                return(
                    <Card key={trip.id}
                        style={{ 
                            width: '20vw',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1vh'
                        }}
                        cover={
                            <img alt={trip.name}
                            src="https://picsum.photos/300/200" />
                        }
                        actions={[
                            <ShoppingCartOutlined
                            value={trip.id}
                            
                            onClick={(() => {
                               // setTripId(...tripid, trip.id)
                                history.push
                                (`/aplication/${trip.id}/${trip.name}/${trip.planet}`)
                            })} />,
                        ]} 
                    > 

                    <Meta 
                        avatar={<Avatar src="https://picsum.photos/30/30" />}
                        title={trip.name}
                        description={trip.description}
                    />
                    </Card>
                )
            })}
            <RightBar />
        </ViagensPageContainer>

    );
}
export default Viagens;