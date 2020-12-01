import { reducerWithInitialState } from 'typescript-fsa-reducers'
import Actions  from './actions'

export interface UserState {
    id: string,
    name: string,
}

export interface LocationState {
    location: {
        longitude: number
        latitude: number,
    }
}

const initialUserState:UserState = {
    id: '',
    name: '',
}

const initialLocationState:LocationState = {
    location: {
        longitude: 0,
        latitude: 0
    } 
}

export const userReducer = reducerWithInitialState(initialUserState)
    .case(Actions.updateUserId, (state, id) => {
        return Object.assign({}, state, { id })
    })
    .case(Actions.updateUserName, (state, name) => {
        return Object.assign({}, state, { name })
    })

export const locationReducer = reducerWithInitialState(initialLocationState)
    .case(Actions.updateLocation, (state, location) => {
        return Object.assign({},state, {location})
    })

