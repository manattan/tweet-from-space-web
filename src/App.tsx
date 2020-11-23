import React, { useEffect } from 'react'
import './App.css';
import firebase from './auth/Firebase'
import Login from './components/Login'
import 'firebase/auth'

const App = () => {
  const handleRedirectFromTwitter = () => {
    firebase.auth().getRedirectResult()
  }
  

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        handleRedirectFromTwitter()
        console.log(user.displayName)
        console.log(user.uid)
      } else {
        console.log(null)
      }
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>宇宙からの呟きを待つんや.</h1>
        <Login />
      </header>
    </div>
  );
}

export default App;
