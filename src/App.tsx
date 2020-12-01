/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './App.css';
import { connect } from 'react-redux'
import firebase from './auth/Firebase'
import { getISSLocation } from './API/main'
import Login from './components/Login'
import Logout from './components/Logout'
import WelcomeDM from './components/WelcomeDM'
import 'firebase/auth'
import { UserState, LocationState } from './store/reducers'
import { Appstate } from './store/main'
import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux'
import Actions from './store/actions'

interface UserActions {
  updateUserId: (v: string) => Action<string>
  updateUserName: (v: string) => Action<string>
}

interface LocationActions {
  updateLocation: (v:location) => Action<location>
}
 
type Props = UserState & UserActions & LocationState & LocationActions

type location = {
  longitude: number
  latitude: number,
}

const App:React.FC<Props> = (props: Props) => {
  let isJapan = false
  let fininit = false
  const getLoc = () => {
    if(!fininit){
      setInterval(async ()=> {
        const res:any = await getISSLocation()
        res.latitude -= 0
        res.longitude -= 0
        if (20< props.location.latitude && props.location.latitude < 46 && 122< props.location.longitude && props.location.longitude< 154 ) {
          isJapan = true
        }
        props.updateLocation(res)
        fininit = true
        console.log(fininit)
      },3000)
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.displayName && user?.uid) {
        firebase.auth().getRedirectResult()
        props.updateUserId(user.uid)
        props.updateUserName(user.displayName)
      }
    })
    getLoc()
  }, [])

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
  else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>宇宙からの呟きを待つんや.</h1>
          <p>Hello, {props.name}</p>
          <p>ISSですが、緯度{props.location.latitude}度, 経度{props.location.longitude}度 の地点にあるわ</p>
          <WelcomeDM isJapan={isJapan} />
          <Logout />
        </header>
      </div>
    );
  }
}

function mapStateToProps(appState: Appstate) {
  return Object.assign({},appState.user,appState.location)

}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>){
  return {
      updateUserId: (v: string) => dispatch(Actions.updateUserId(v)),
      updateUserName: (v: string) => dispatch(Actions.updateUserName(v)),
      updateLocation: (v: location) => dispatch(Actions.updateLocation(v))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
