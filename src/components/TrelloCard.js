import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import cls from './TrelloCard.module.css';

const TrelloCard = ({title}) => {
    return(
        <Card className={cls.card}>
            <CardContent>
            <Typography gutterBottom>
          {title}
        </Typography>
        </CardContent>
    </Card>
    )
}

export default TrelloCard