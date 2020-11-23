import * as React from 'react'
import '../App.css'
import firebase, { providerTwitter } from '../auth/Firebase'

const Auth = firebase.auth()

export default class Login extends React.Component {
    render () {
        
        return (
            <div>
                <span className="button" onClick={this.login}>Login with Twitter</span>
            </div>
        )
    }

    login = () => {
        Auth.signInWithPopup(providerTwitter).then(res => {
            console.log(res.credential)
            console.log(res.additionalUserInfo)
        }).catch(err=>{
            console.log(err)
        }) 
    }
    
}