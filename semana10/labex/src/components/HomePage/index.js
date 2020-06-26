import React from 'react';
import { HomePageContainer, ImgContainer } from './styles';
import  Banner  from '../../img/marte_banner3.jpg'

function HomePage(){

    return(

        <HomePageContainer>
            <ImgContainer>
                <img src={Banner} alt='Conheça Marte' />
            </ImgContainer>
            
        </HomePageContainer>

    );
}
export default HomePage;