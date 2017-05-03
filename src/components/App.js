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
    store.username = result.user.displayName
    store.photo = result.user.photoURL
    store.userColor = `#${result.credential.accessToken.substr(0, 6)}`
    store.userChatColor = `#${result.credential.accessToken.substr(7, 6)}`
  })

  render () {
    return <div className={styles.App}>
      <h1>AOL Chat Room</h1>
      <div className={styles.chatbox}>
        <Chatbox />
      </div>
    </div>
  }
}

export default App
