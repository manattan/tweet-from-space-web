import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

type location = {
    longitude: string
    latitude: string
}

const Actions = {
    updateUserId: actionCreator<string>('ACTIONS_UPDATE_USERID'),
    updateUserName: actionCreator<string>('ACTIONS_UPDATE_USERNAME'),
    updateLocation: actionCreator<location>('ACTIONS_UPDATE_LOCATION')
}
export default Actions