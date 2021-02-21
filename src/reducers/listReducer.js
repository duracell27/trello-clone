import {CONSTANTS} from '../actions'
let listID = 2;
let cardID = 4;
const initialState = [
    {
        title: 'Last Episode',
        id: 0,
        cards: [
            {
                title: 'wery last episode of star wars',
                id: 0
            },
            {
                title: 'нууууу прям wery last episode of star wars',
                id: 1
            },

        ]
    },
    {
        title: 'Next Episode',
        id: 1,
        cards: [
            {
                title: 'wery last episode of star wars',
                id: 0
            },
            {
                title: 'нууууу прям wery last episode of star wars',
                id: 1
            },
            {
                title: 'Всьо закінчилось то добре',
                id: 2
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
                id: listID
            }
            listID++;
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            const newCard = {
                title: action.payload.text,
                id: cardID
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
        default: return state
    }
}

export default listReducer