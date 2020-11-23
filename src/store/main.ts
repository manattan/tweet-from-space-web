import { createStore, combineReducers } from 'redux'
import { UserState, userReducer } from './reducers'

export type Appstate = {
    user: UserState
}

const store = createStore(
    combineReducers<Appstate>({
        user: userReducer
    })
)

export default store