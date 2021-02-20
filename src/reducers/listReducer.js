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
        title: 'next Episode',
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
                id: 1
            },
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state
    }
}

export default listReducer