import { observable, action } from 'mobx'
import db from './db'

class Store {
  @observable chat = {
    items: {}
  }
  @observable username
  @observable photo
  @observable userColor
  @observable userChatColor

  @action load = () => {
    db.ref('items').on('value', snapshot => {
      this.chat = {items: snapshot.val()}
    })
  }

  @action addItem (text) {
    db.ref('items').push().set({ text,
      username: this.username,
      userColor: this.userColor,
      userChatColor: this.userChatColor})
    this.load()
  }
}

const store = new Store()

export default store
