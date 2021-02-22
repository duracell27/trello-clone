import {CONSTANTS} from '../actions'
let listID = 2;
let cardID = 4;
const initialState = [
    {
        title: 'Last Episode',
        id: `list-${0}`,
        cards: [
            {
                title: 'wery last episode of star wars',
                id: `card-${0}`
            },
            {
                title: 'нууууу прям wery last episode of star wars',
                id: `card-${1}`
            },

        ]
    },
    {
        title: 'Next Episode',
        id: `list-${1}`,
        cards: [
            {
                title: 'wery last episode of star wars',
                id: `card-${2}`
            },
            {
                title: 'нууууу прям wery last episode of star wars',
                id: `card-${3}`
            },
            {
                title: 'Всьо закінчилось то добре',
                id: `card-${4}`
            },
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID++;
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            const newCard = {
                title: action.payload.text,
                id: `card-${cardID}`
            }
            cardID++;
            const newState = state.map((list)=>{
                if(list.id === action.payload.listID){
                    return{
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }else{
                    return list
                }
            })
            return newState
        case CONSTANTS.DRAG_HAPPENED:{
            const {droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                type} = action.payload
            
            const newState = [...state]

                if(type === 'list'){
                    const list = newState.splice(droppableIndexStart, 1)
                    newState.splice(droppableIndexEnd, 0, ...list)
                    return newState
                }

            //in same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }
            // other list
            if(droppableIdStart !== droppableIdEnd){
                //find list where drag hapened
                const listStart = state.find(list=> droppableIdStart === list.id)

                //pull out the card from the list
                const card = listStart.cards.splice(droppableIndexStart, 1)

                //find list where drag ended
                const listEnd = state.find(list=> droppableIdEnd === list.id)

                //put the card into new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }
            return newState}
        default: return state
    }
}

export default listReducer