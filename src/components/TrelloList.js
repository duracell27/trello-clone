import React from 'react'
import TrelloActionButton from './TrelloActionButton'
import TrelloCard from './TrelloCard'
import cls from './TrelloList.module.css'

function TrelloList(props){
    const cards = props.cards
    const listID = props.listID
    return (
        <div className={cls.container}>
            <h4>{props.title}</h4>
            {cards.map((card)=>(<TrelloCard key={card.id} title={card.title}/>))}
            <TrelloActionButton listID={listID}/>
        </div>
    )
}



export default TrelloList;