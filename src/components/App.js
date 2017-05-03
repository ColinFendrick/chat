import React, { Component } from 'react'
import Chatbox from './Chatbox'
import styles from './styles.scss'
import store from '../store'
import { observer } from 'mobx-react'
import firebase from 'firebase'

@observer
class App extends Component {
  componentDidMount () {
    store.load()
  }

  provider = new firebase.auth.TwitterAuthProvider()

  popUp = firebase.auth().signInWithPopup(this.provider).then(result => {
    let token = result.credential.accessToken
    let secret = result.credential.secret
    let user = result.user
  }).catch(error => {
    let errorCode = error.code
    let errorMessage = error.message
    let email = error.email
    let credential = error.credential
  })

  render () {
    return <div className={styles.App}>
      <h1>AOL Chat Room</h1>
      <div className={styles.chatboxes}>
        <Chatbox id='colin' />
        <Chatbox id='dummy guy' />
      </div>
    </div>
  }
}

export default App
