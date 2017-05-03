import { observable } from 'mobx'
import db from './db'

class Store {
  @observable chat = {
    id: {
      items: {}
    }
  }

  load = () => {
    db.ref('items').on('value', snapshot => {
      this.chat = {items: snapshot.val()}
    })
  }

  addItem (text) {
    db.ref('items').push().set({ text })
    this.load()
  }
}

const store = new Store()

export default store
