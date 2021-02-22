import React from 'react'
import TrelloActionButton from './TrelloActionButton'
import TrelloCard from './TrelloCard'
import cls from './TrelloList.module.css'
import { Droppable } from "react-beautiful-dnd";

function TrelloList(props){
    const cards = props.cards
    const listID = props.listID
    return (
        <Droppable droppableId={String(listID)}>
            {(provided)=>(
                <div {...provided.droppableProps} ref={provided.innerRef} className={cls.container}>
                <h4>{props.title}</h4>
                {cards.map((card, index)=>(<TrelloCard index={index} key={card.id} title={card.title} id={card.id}/>))}
                {provided.placeholder}
                <TrelloActionButton listID={listID}/>
                </div>
            )}
        
        </Droppable>
    )
}



export default TrelloList;