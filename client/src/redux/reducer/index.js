import {type} from "../actions/index.js"

const initial = {
    user:null,
    products: []
}
export default function rootReducer(state = initial,action){
    switch(action.type){
        case type.POST_USER:
            return{
                ...state,
                user: action.payload
            }
            case type.GET_PRODUCTS:
                return{
                    ...state,
                    products: action.payload
                    
                }
            default:
                return {...state}
    }
}