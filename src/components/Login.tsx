import * as React from 'react'
import firebase, { providerTwitter } from '../auth/Firebase'

const Auth = firebase.auth()

export default class Login extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.login}>Twitterでログイン</button>
            </div>
        )
    }

    login = () => {
        Auth.signInWithPopup(providerTwitter).then(res => {
            console.log(res)
        }).catch(err=>{
            console.log(err.code)
        }) 
    }
    
}