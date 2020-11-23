import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

const userActions = {
    updateUserId: actionCreator<string>('ACTIONS_UPDATE_USERID'),
    updateUserName: actionCreator<string>('ACTIONS_UPDATE_USERNAME')
}
export default userActions