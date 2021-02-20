import { connect } from 'react-redux';
import cls from './App.module.css';
import React from 'react'
import TrelloList from './TrelloList';


class App extends React.Component{

  render(){
    const {lists} = this.props
    return (
      <div className={cls.app}>
        {lists.map((elem)=>(<TrelloList title={elem.title} cards={elem.cards}/>))}
      </div>
    );
  }
  
}

const MapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(MapStateToProps)(App);
