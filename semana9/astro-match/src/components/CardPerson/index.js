import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

import { 
    
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,

} from '@material-ui/core';

const CardPersonContainer = styled.div `

    display: flex;
    justify-content: center;
`
const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      minWidth: 400,
    },
    media: {
      
    },
  });

function CardPerson ( {person, actions } ){ 

    const classes = useStyles();

    const personName = person.name;
    const personPhoto = person.photo;
    const personAge = person.age;

    return(
        <CardPersonContainer>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="440"
                        className={classes.media}
                        title={personName}  
                        image={personPhoto}  
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {personName} &nbsp;&nbsp; - &nbsp;&nbsp; {personAge}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </CardPersonContainer>
        );
}
export default CardPerson;