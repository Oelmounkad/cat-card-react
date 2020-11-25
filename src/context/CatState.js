import React, { useReducer } from 'react';
import CatContext from './CatContext'
import CatReducer from './CatReducer'

import { GET_ALL_CATS , 
         GET_CAT , ADD_CAT ,
         DELETE_CAT ,
         UPDATE_CAT } from './types'

const CatState = props => {


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

// Actions:

// Get All Cats


// Get Cat by Id


// Add Cat


// Update Cat


// Delete Cat

return (
    <CatContext.Provider 
    value={{
        cards: state.cards
    }}>

        {props.children}
    </CatContext.Provider>
)

}
export default Catstate