import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const userActions = {
    updateUserId: actionCreator<string>('ACTIONS_UPDATE_USERID'),
    updateUsername: actionCreator<string>('ACTIONS_UPDATE_USERNAME')
}