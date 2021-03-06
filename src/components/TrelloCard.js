import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import cls from './TrelloCard.module.css';
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({title, id, index}) => {
    return(
        <Draggable draggableId={String(id)} index={index}>
            {(provided)=>(
                <div className={cls.card} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card>
                <CardContent>
                <Typography gutterBottom>
                    {title}
                    </Typography>
                    </CardContent>
                </Card>
                </div>
            )}
        </Draggable>
        
    )
}

export default TrelloCard