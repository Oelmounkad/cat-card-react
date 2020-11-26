import React, { useReducer , useContext} from 'react';
import CatContext from './CatContext'
import CatReducer from './CatReducer'

import { ADD_CAT ,
         DELETE_CAT ,
         UPDATE_CAT } from './types'

const CatState = props => {

    const catContext = useContext(CatContext)

const initialState = {
    cards : [
        {
            id: 1,
            title: 'Random cat card',
            imageUrl: 'https://cataas.com/cat?width=250&height=200',
            description: 'That card shows a random cat image.'
          },
          {
            id: 2,
            title: 'Random cat card',
            imageUrl: 'https://cataas.com/cat/says/Hello?width=250&height=200',
            description: 'That card shows a random cat image with a text !'
          }
    ]
}

const [state, dispatch] = useReducer(CatReducer, initialState)

// ---> Actions:

// Add Cat
const addCat = data => {
    let id = generateNextId()
    data.id = id
    console.log(state.cards[state.cards.length-1].id)
    console.log('from actions : '+data.title)
    dispatch({
        type: ADD_CAT,
        payload: data
    })
}

// Update Cat


// Delete Cat



//Error


//--------------------------------------------------
// ---> State Functions:

// generateNewId

const generateNextId = () => {
    const id = state.cards[state.cards.length-1].id
    return id + 1
}



return (
    <CatContext.Provider 
    value={{
        cards: state.cards,
        addCat
    }}>

        {props.children}
    </CatContext.Provider>
)

}
export default CatState