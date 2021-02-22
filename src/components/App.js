import { connect } from 'react-redux';
import cls from './App.module.css';
import React from 'react'
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import {DragDropContext} from 'react-beautiful-dnd'
import { sort } from "./../actions";


class App extends React.Component{

  onDragEnd = (result) =>{
    const {destination, source, draggableId} = result
    if(!destination){
      return
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
  }

  render(){
    const {lists} = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className={cls.app}>
        {lists.map((elem)=>(<TrelloList listID={elem.id} key={elem.id} title={elem.title} cards={elem.cards}/>))}
        <TrelloActionButton list/>
      </div>
      </DragDropContext>
    );
  }
  
}

const MapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(MapStateToProps)(App);
