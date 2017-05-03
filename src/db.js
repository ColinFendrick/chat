import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBjRHSKI2yAt7e9l83SXz4BqbHUuL3ixf8',
  authDomain: 'colin-chat.firebaseapp.com',
  databaseURL: 'https://colin-chat.firebaseio.com'
})

export default app.database()
