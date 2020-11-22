import { createStore, combineReducers } from 'redux'
import { userState, userReducer } from './reducers'

export type Appstate = {
    user: userState
}

const store = createStore(
    combineReducers<Appstate>({
        user: userReducer
    })
)

export default store