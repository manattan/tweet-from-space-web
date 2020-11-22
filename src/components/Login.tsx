import React from 'react'

export default class Login extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.login}>Twitterでログイン</button>
            </div>
        )
    }

    login = () => {
        console.log('login!')
    }
    
}