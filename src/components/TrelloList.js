import React from 'react'
import TrelloCard from './TrelloCard'
import cls from './TrelloList.module.css'

function TrelloList(props){
    const cards = props.cards
    return (
        <div className={cls.container}>
            <h4>{props.title}</h4>
            {cards.map((card)=>(<TrelloCard title={card.title}/>))}
            
        </div>
    )
}



export default TrelloList;