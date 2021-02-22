import { connect } from 'react-redux';
import cls from './App.module.css';
import React from 'react'
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import { sort } from "./../actions";


class App extends React.Component{

  onDragEnd = (result) =>{
    const {destination, source, draggableId, type} = result
    if(!destination){
      return
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))
  }

  render(){
    const {lists} = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId={'all-lists'} direction={'horizontal'} type={'list'}>
          {(provided)=>(<div {...provided.droppableProps} ref={provided.innerRef} className={cls.app}>
        {lists.map((elem, index)=>(<TrelloList listID={elem.id} key={elem.id} title={elem.title} cards={elem.cards} index={index}/>))}
        {provided.placeholder}
        <TrelloActionButton list/>
      </div>)}
      
      </Droppable>
      </DragDropContext>
    );
  }
  
}

const MapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(MapStateToProps)(App);
