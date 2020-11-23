import { reducerWithInitialState } from 'typescript-fsa-reducers'
import userActions  from './actions'

export interface UserState {
    id: string,
    name: string
}

const initialState:UserState = {
    id: '',
    name: ''
}

export const userReducer = reducerWithInitialState(initialState)
    .case(userActions.updateUserId, (state, id) => {
        return Object.assign({}, state, { id })
    })
    .case(userActions.updateUserName, (state, name) => {
        console.log('reducer通過', name)
        return Object.assign({}, state, { name })
    })

