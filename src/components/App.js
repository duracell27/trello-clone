import { connect } from 'react-redux';
import cls from './App.module.css';
import React from 'react'
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import {DragDropContext} from 'react-beautiful-dnd'


class App extends React.Component{

  onDragEnd = () =>{
    
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
