import { createStore, combineReducers } from 'redux'
import { UserState, userReducer, LocationState, locationReducer } from './reducers'

export type Appstate = {
    user: UserState
    location: LocationState
}

const store = createStore(
    combineReducers<Appstate>({
        user: userReducer,
        location: locationReducer
    })
)

export default store