import { connect } from 'react-redux';
import cls from './App.module.css';
import React from 'react'
import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';


class App extends React.Component{

  render(){
    const {lists} = this.props
    return (
      <div className={cls.app}>
        {lists.map((elem)=>(<TrelloList listID={elem.id} key={elem.id} title={elem.title} cards={elem.cards}/>))}
        <TrelloActionButton list/>
      </div>
    );
  }
  
}

const MapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(MapStateToProps)(App);
