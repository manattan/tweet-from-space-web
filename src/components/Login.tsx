import * as React from 'react'
import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import '../App.css'
import firebase, { providerTwitter } from '../auth/Firebase'
import userActions from '../store/actions'
import { UserState } from '../store/reducers'
import { Appstate } from '../store/main' 

const Auth = firebase.auth()

interface UserActions {
    updateUserId: (v: string) => Action<string>
    updateUserName: (v: string) => Action<string>
}

type userProps = UserState & UserActions

class Login extends React.Component<userProps> {
    render () {
        return (
            <div>
                <span className="button" onClick={this.login}>Login with Twitter</span>
            </div>
        )
    }

    login = () => {
        Auth.signInWithPopup(providerTwitter).then(res => {
            if (res.additionalUserInfo?.username){
                console.log(res.additionalUserInfo.username)
                this.props.updateUserName(res.additionalUserInfo.username)
            }
        }).catch(err=>{
            console.error(err)
        }) 
    }
}

function mapStateToProps(appState: Appstate) {
    return Object.assign({},appState.user)

}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>){
    return {
        updateUserId: (v: string) => dispatch(userActions.updateUserId(v)),
        updateUserName: (v: string) => dispatch(userActions.updateUserName(v))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)



