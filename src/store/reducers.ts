import { reducerWithInitialState } from 'typescript-fsa-reducers'
import userActions  from './actions'

export interface userState {
    id: string,
    name: string
}

const initialState:userState = {
    id: '',
    name: ''
}

export const userReducer = reducerWithInitialState(initialState)
    .case(userActions.updateUserId, (state, id) => {
        return Object.assign({}, state, { id })
    })
    .case(userActions.updateUserName, (state, name) => {
        return Object.assign({}, state, { name })
    })

