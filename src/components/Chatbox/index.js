import React from 'react'
import styles from './styles.scss'
import ChatText from '../ChatText'
import store from '../../store'

const _focus = e => {
  e.target.setSelectionRange(0, e.target.value.length)
}

const _submit = e => {
  e.preventDefault()
  store.addItem(e.target.chat.value)
  e.target.chat.value = ''
}

const Chatbox = ({ id }) => (
  <div className={styles.Chatbox}>
    {id}
    <ChatText />
    <form onFocus={_focus} onSubmit={_submit}>
      <input name='chat' />
    </form>
  </div>
)

export default Chatbox
