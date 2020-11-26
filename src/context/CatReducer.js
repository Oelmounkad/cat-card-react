import { GET_ALL_CATS , 
    GET_CAT , ADD_CAT ,
    DELETE_CAT ,
    UPDATE_CAT } from './types'


    export default (state, action) => {
        switch(action.type){
            case ADD_CAT:
                return {
                    ...state,
                    cards: [...state.cards,action.payload]
                }
        }
    }