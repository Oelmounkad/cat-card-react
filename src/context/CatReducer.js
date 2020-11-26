import {ADD_CAT ,
    DELETE_CAT ,
    UPDATE_CAT } from './types'


    export default (state, action) => {
        switch(action.type){
            case ADD_CAT:
                return {
                    ...state,
                    cards: [action.payload,...state.cards]
                }
        }
    }