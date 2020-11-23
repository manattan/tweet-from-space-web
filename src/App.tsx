import React, { useEffect } from 'react'
import './App.css';
import { connect } from 'react-redux'
import firebase from './auth/Firebase'
import Login from './components/Login'
import Logout from './components/Logout'
import 'firebase/auth'
import { UserState } from './store/reducers'
import { Appstate } from './store/main'
import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux'
import userActions from './store/actions'

interface UserActions {
  updateUserId: (v: string) => Action<string>
  updateUserName: (v: string) => Action<string>
}

type userProps = UserState & UserActions

const App:React.FC<userProps> = (props: userProps) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.displayName && user?.uid) {
        firebase.auth().getRedirectResult()
        props.updateUserId(user.uid)
        props.updateUserName(user.displayName)
      }
    })
  })


  if (!props.name) {
    return (
      <div className="App">
      <header className="App-header">
        <h1>宇宙からの呟きを待つんや.</h1>
        <Login />
      </header>
    </div>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>宇宙からの呟きを待つんや.</h1>
        <p>Hello, {props.name}</p>
        <Logout />
      </header>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
